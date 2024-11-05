import purchaseProductUseCase from "../core/useCases/purchaseProductUseCase.js";
import getUserByIdUseCase from "../core/useCases/getUserByIdUseCase.js";
import getPurchasesByUserIdUseCase from "../core/useCases/getPurchasesByUserIdUseCase.js";
import getAllPurchasesUseCase from "../core/useCases/getAllPurchasesUseCase.js";

const createPurchase = async (req, res) => {
    const { productId, userId, quantity } = req.body;
    const result = await purchaseProductUseCase(productId, userId, quantity);
    return res.status(result.statusCode).json(result);
};

const getAllPurchases = async (req, res) => {
    const result = await getAllPurchasesUseCase();
    return res.status(result.statusCode).json(result.payload);
};

const getPurchaseById = async (req, res) => {
    const { id } = req.params;
    const result = await getUserByIdUseCase(id);
    return res.status(result.statusCode).json(result.payload);
};

const getPurchasesByUserId = async (req, res) => {
    const { uid } = req.params;
    const result = await getPurchasesByUserIdUseCase(uid);
    return res.status(result.statusCode).json(result.payload);
};

export default { createPurchase, getPurchases, getPurchaseById, getPurchasesByUserId };