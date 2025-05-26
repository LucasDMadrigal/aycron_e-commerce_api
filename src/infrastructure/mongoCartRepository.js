import { Cart } from "../core/models/cart.model.js";

export class CartRepository {
  async getByUserId(userId) {
    return Cart.findOne({ user: userId }).populate("products.product");
  }

  //   async createOrUpdate(userId, productId, quantity) {
  //   const cart = await Cart.findOne({ user: userId });

  //   if (cart) {
  //     const existingProduct = cart.products.find(
  //       p => p.product.toString() === productId.toString()
  //     );

  //     if (existingProduct) {
  //       existingProduct.quantity += quantity;
  //     } else {
  //       cart.products.push({ product: productId, quantity });
  //     }

  //     await cart.save();
  //   } else {
  //     const newCart = new Cart({
  //       user: userId,
  //       products: [{ product: productId, quantity }]
  //     });

  //     await newCart.save();
  //   }
  //   return cart.populate('products.product');
  // }

  async createOrUpdate(userId, productId, quantity) {
    let cart = await Cart.findOne({ user: userId });

    if (cart) {
      const existingProduct = cart.products.find(
        (p) => p.product.toString() === productId.toString()
      );

      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        cart.products.push({ product: productId, quantity });
      }

      await cart.save();
    } else {
      cart = new Cart({
        user: userId,
        products: [{ product: productId, quantity }],
      });

      await cart.save();
    }

    // 🔁 En ambos casos, asegurás populate antes de devolver
    return cart.populate("products.product");
  }

  async updateCart(userId, productId, quantity) {
    console.log("🚀 ~ CartRepository ~ updateCart ~ userId:", userId);
    console.log("🚀 ~ CartRepository ~ updateCart ~ productId:", productId);
    console.log("🚀 ~ CartRepository ~ updateCart ~ quantity:", quantity);

    try {
      const cart = await Cart.findOne({ user: userId });
      if (!cart)
        return res.status(404).json({ message: "Carrito no encontrado" });

      const productEntry = cart.products.find(
        (p) => p.product.toString() === productId
      );
      if (!productEntry)
        return res
          .status(404)
          .json({ message: "Producto no está en el carrito" });

      productEntry.quantity = quantity;
      await cart.save();
      return (await cart.populate("products.product")).products;
      // res.json(cart.products);
    } catch (err) {
      res.status(500).json({ message: "Error al actualizar cantidad" });
    }
  }

  async deleteProduct(userId, productId) {
    const cart = await Cart.findOne({ user: userId });
    if (!cart) return null;
    cart.products = cart.products.filter(
      (p) => p.product.toString() !== productId
    );
    await cart.save();
    return (await cart.populate("products.product")).products;
  }

  async clearCart(userId) {
    return Cart.findOneAndDelete({ user: userId });
  }
}
