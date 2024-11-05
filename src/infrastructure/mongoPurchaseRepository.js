import { Purchase } from "../core/models/purchase.model.js";

class MongoPurchaseRepository {
  async findAll() {
    const purchases = await Purchase.find();
    return purchases;
  }

  async createPurchase(purchase) {
    const newPurchase = new Purchase(purchase);
    return await newPurchase.save();
  }
}
