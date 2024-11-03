import { Product } from "../core/models/product.model.js";
export default class MongoProductRepository {
    async createProduct(product) {
        const newProduct = new Product(product);
        return await newProduct.save();
    }

    async findAll() {
        return await Product.find();
    }

    async findById(id) {
        return await Product.findById(id);
    }

    async update(id, product) {
        return await Product.findByIdAndUpdate(id, product, { new: true });
    }

    async delete(id) {
        return await Product.findByIdAndUpdate(id, { deleted: true });
    }

    async findByName(name) {
        return await Product.findOne({ name });
    }
}