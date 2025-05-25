import { Cart } from '../core/models/cart.model.js';

export class CartRepository {
  async getByUserId(userId) {
    return Cart.findOne({ user: userId }).populate('products.product');
  }

  async createOrUpdate(userId, productId, quantity) {
  const cart = await Cart.findOne({ user: userId });

  if (cart) {
    const existingProduct = cart.products.find(
      p => p.product.toString() === productId.toString()
    );

    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      cart.products.push({ product: productId, quantity });
    }

    return cart.save();
  } else {
    const newCart = new Cart({
      user: userId,
      products: [{ product: productId, quantity }]
    });

    return newCart.save();
  }
}


  async deleteProduct(userId, productId) {
    const cart = await Cart.findOne({ user: userId });
    if (!cart) return null;
    cart.products = cart.products.filter(p => p.product.toString() !== productId);
    return cart.save();
  }

  async clearCart(userId) {
    return Cart.findOneAndDelete({ user: userId });
  }
}
