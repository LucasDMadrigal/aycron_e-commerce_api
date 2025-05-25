import express from 'express';
import cartController from '../controllers/cart.controller.js';
import authMiddleware from '../infrastructure/webserver/middleware/auth.middleware.js';
const router = express.Router();

router.get('/', authMiddleware, cartController.getCart);
router.post('/', authMiddleware, cartController.addToCart);
router.delete('/:productId', authMiddleware, cartController.removeFromCart);
router.delete('/', authMiddleware, cartController.clearCart);

export default router; 