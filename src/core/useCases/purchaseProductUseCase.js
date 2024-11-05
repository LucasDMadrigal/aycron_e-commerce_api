import ProductRepository from "../../infrastructure/mongoProductRepository.js";
import UserRepository from "../../infrastructure/mongoUserRepository.js";
import purchaseRepository from "../../infrastructure/mongoPurchaseRepository.js";

const productRepository = new ProductRepository();
const userRepository = new UserRepository();
const purchaseRepository = new purchaseRepository();


const purchaseProductUseCase = async (productId, userId, quantity) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    const product = await productRepository.findById(productId);
    const user = await userRepository.findById(userId);

    if (!product) {
      return { statusCode: 404, message: "Product not found" };
    }
    if (!user) {
      return { statusCode: 404, message: "User not found" };
    }

    if (product.quantity < quantity) {
      return { statusCode: 400, message: "Insufficient quantity" };
    }

    product.quantity -= quantity;

    await productRepository.update(productId, product);

    const purchase = {
      user_id: userId,
      products: [
        {
          product_id: productId,
          quantity,
          price: product.price,
        },
      ],
    };

    const newPurchase = await purchaseRepository.createPurchase(purchase);
    return newPurchase;
  } catch (error) {
    await session.abortTransaction();
    throw error;
  }
};

export default purchaseProductUseCase;
