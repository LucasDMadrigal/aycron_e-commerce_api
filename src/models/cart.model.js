import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    products: { type: Array, required: true },
    total: { type: Number, required: true },
    user_id: { type: String, required: true },
});

export const Cart = mongoose.model('Cart', cartSchema)