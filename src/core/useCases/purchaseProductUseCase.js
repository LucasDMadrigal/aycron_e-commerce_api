import MongoProductRepository from "../../infrastructure/mongoProductRepository.js";
import MongoUserRepository from "../../infrastructure/mongoUserRepository.js";
import MongoPurchaseRepository from "../../infrastructure/mongoPurchaseRepository.js";
import mongoose from "mongoose";

const productRepository = new MongoProductRepository();
const userRepository = new MongoUserRepository();
const purchaseRepository = new MongoPurchaseRepository();

const purchaseProductUseCase = async (products, userId) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    const productsList = products;
    const user = await userRepository.findById(userId);

    if (!user) {
      return { statusCode: 404, payload: "User not found" };
    }

    if (productsList.length === 0) {
      return { statusCode: 400, payload: "Invalid quantity" };
    }

    productsList.forEach(async (product) => {
      const productExists = await productRepository.findById(
        product.product_id
      );
      if (!productExists) {
        return { statusCode: 404, payload: "Product not found" };
      }
      if (productExists.quantity < product.quantity) {
        return { statusCode: 400, payload: "Not enough stock" };
      }

      productExists.quantity -= product.quantity;
      await productExists.save();
    });

    const purchase = await purchaseRepository.createPurchase({
      user_id: userId,
      products,
      date: new Date(),
    });

    await session.commitTransaction();
    session.endSession();
    return res.status(201).json({
      statusCode: 201,
      payload: purchase,
    });

  } catch (error) {
    await session.abortTransaction();
    throw error;
  }
};

export default purchaseProductUseCase;
