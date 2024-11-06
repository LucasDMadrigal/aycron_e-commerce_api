import { Purchase } from "../core/models/purchase.model.js";

export default class MongoPurchaseRepository {
  
  async save(purchase, session = null) {
    return purchase.save({session});
  }
  async findAll() {
    const purchases = await Purchase.find();
    return purchases;
  }

  async createPurchase(purchase, session = null) {
    const newPurchase = new Purchase(purchase);
    return await newPurchase.save({session});
  }

  async getPurchasesByUserId(uid) {
    const purchase = await Purchase.find({ user_id: uid });

    return purchase;
  }

  async findPurchaseById(id) {
    const purchase = await Purchase.findById(id);
    return purchase;
  }

  async updatePurchase(id, purchase) {
    return await Purchase.findByIdAndUpdate(id, purchase, { new: true });
  }
}
