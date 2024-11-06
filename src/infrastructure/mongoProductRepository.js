import { Product } from "../core/models/product.model.js";
export default class MongoProductRepository {

    async save(product, session = null) {
        return product.save({ session });
    }
    async createProduct(product, session = null) {
        return await Product.create(product, {session});
    }

    async findAll() {
        return await Product.find();
    }

    async findById(id, session = null) {
        return await Product.findById(id, {}, { session });
    }

    async update(id, product, session = null) {
        return await Product.findByIdAndUpdate(id, product, { new: true }).session(session);
    }

    async delete(id) {
        return await Product.findByIdAndUpdate(id, { deleted: true });
    }

    async findByName(name) {
        return await Product.findOne({ name });
    }
}