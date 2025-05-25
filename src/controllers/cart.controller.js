import CartUseCase from '../core/useCases/cartUseCase.js';

   export const getCart = async(req, res) => {
    try {
      const userId = req.user.id;
      const cart = await CartUseCase.getCart(userId);
      res.json(cart);
    } catch (err) {
      res.status(500).json({ message: 'Error al obtener el carrito' });
    }
  }

  export const addToCart = async(req, res) => {
    try {
      const {userId} = req.user;
      const { productId, quantity } = req.body;
      const cart = await CartUseCase.addToCart(userId, productId, quantity);
      res.status(200).json(cart);
    } catch (err) {
      res.status(500).json({ message: 'Error al agregar al carrito' });
    }
  }

  export const removeFromCart = async (req, res) => {
    try {
      const userId = req.user.id;
      const { productId } = req.params;
      const cart = await CartUseCase.removeFromCart(userId, productId);
      res.status(200).json(cart);
    } catch (err) {
      res.status(500).json({ message: 'Error al quitar del carrito' });
    }
  }

  export const clearCart = async (req, res) => {
    try {
      const userId = req.user.id;
      await CartUseCase.clearCart(userId);
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ message: 'Error al vaciar el carrito' });
    }
  }

  export default {
    getCart,
    addToCart,
    removeFromCart,
    clearCart
  }