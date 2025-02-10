import { Product } from "../core/models/product.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import MongoProductRepository from "../infrastructure/mongoProductRepository.js";

const productRepository = new MongoProductRepository();

export const createProduct = async (req, res) => {
    const product = req.body;
    const newProduct = await productRepository.createProduct(product);
    res.send({
        result: "Product created successfully",
        payload: newProduct
    });
}

export const getProducts = async (req, res) => {
    const products = await productRepository.findAll();
    res.send({ result: "success", payload: products });
}

export const getProductById = async (req, res) => {
    const id = req.params.id;
    const product = await productRepository.findById(id);
    res.send({ result: "success", payload: product });
}

export const updateProduct = async (req, res) => {
    const id = req.params.id;
    const product = req.body;
    const updatedProduct = await productRepository.update(id, product);
    res.send({ result: "success", payload: updatedProduct });
}

export const deleteProduct = async (req, res) => {
    const id = req.params.id;
    const deletedProduct = await productRepository.delete(id);
    res.send({ result: "success", payload: deletedProduct });
}

export default {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
}