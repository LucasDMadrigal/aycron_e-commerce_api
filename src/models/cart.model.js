import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    products: { type: Array, required: true },
});

export const Cart = mongoose.model('Cart', cartSchema)