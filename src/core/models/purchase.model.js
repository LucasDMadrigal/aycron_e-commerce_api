import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    products: [
        {
            product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, required: true },
            price: { type: Number, required: true }
        }
    ], default: [],
    date: { type: Date, default: Date.now }
});

export const Purchase = mongoose.model('Purchase', purchaseSchema)