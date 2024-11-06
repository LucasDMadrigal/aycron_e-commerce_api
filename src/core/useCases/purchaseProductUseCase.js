import MongoProductRepository from "../../infrastructure/mongoProductRepository.js";
import MongoUserRepository from "../../infrastructure/mongoUserRepository.js";
import MongoPurchaseRepository from "../../infrastructure/mongoPurchaseRepository.js";
import { Purchase } from "../models/purchase.model.js";
import mongoose from "mongoose";

const productRepository = new MongoProductRepository();
const userRepository = new MongoUserRepository();
const purchaseRepository = new MongoPurchaseRepository();

const purchaseProductUseCase = async (products, userId) => {
  const user = await userRepository.findById(userId);

  const session = await mongoose.startSession();

  if (!user) {
    return { statusCode: 404, payload: "User not found" };
  }
  try {
    const result = await session.withTransaction(async () => {
      const purchaseProducts = [];

      for (const product of products) {
        const productExists = await productRepository.findById(
          product.product_id,
          session
        );
        if (!productExists) {
          return { statusCode: 404, payload: "Product not found" };
        }

        if (productExists.stock < product.quantity) {
          return { statusCode: 400, payload: "Insufficient stock" };
        }

        productExists.stock -= product.quantity;
        await productRepository.save(productExists, session);
        purchaseProducts.push({
          product_id: productExists._id,
          quantity: product.quantity,
          price: productExists.price,
        });
      }

      const newPurchase = new Purchase({
        user_id: user._id,
        products: purchaseProducts,
      });

      await purchaseRepository.createPurchase(newPurchase, session);

      return { statusCode: 201, payload: newPurchase };
    });

    return result;
  } catch (error) {
    console.log(error);
    return { statusCode: 500, payload: error };
  } finally {
    session.endSession();
  }
};

export default purchaseProductUseCase;
