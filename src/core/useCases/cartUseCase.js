import { CartRepository } from '../../infrastructure/mongoCartRepository.js';

const cartRepository = new CartRepository();

 class CartUseCase {
  async getCart(userId) {
    return await cartRepository.getByUserId(userId);
  }

  async addToCart(userId, productId, quantity) {
    return await cartRepository.createOrUpdate(userId, productId, quantity);
  }

  async removeFromCart(userId, productId) {
    return await cartRepository.deleteProduct(userId, productId);
  }

  async clearCart(userId) {
    return await cartRepository.clearCart(userId);
  }

  async updateCart(userId, productId, quantity) {
    return await cartRepository.updateCart(userId, productId, quantity);
  }
}

export default new CartUseCase();