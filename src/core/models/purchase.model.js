import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    products: [
          {
            product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
            quantity: { type: Number },
          },
        ],
    total: { type: Number }, 
    date: { type: Date, default: Date.now }
});

export const Purchase = mongoose.model('Purchase', purchaseSchema)