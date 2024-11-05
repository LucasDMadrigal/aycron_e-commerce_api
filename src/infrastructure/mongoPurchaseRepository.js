import { Purchase } from "../core/models/purchase.model.js";

export default class MongoPurchaseRepository {
  async findAll() {
    const purchases = await Purchase.find();
    return purchases;
  }

  async createPurchase(purchase) {
    const newPurchase = new Purchase(purchase);
    return await newPurchase.save();
  }

  async getPurchasesByUserId(uid) {
    const purchase = await Purchase.find({ user_id: uid });

    return purchase;
  }
}
