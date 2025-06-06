import purchaseProductUseCase from "../core/useCases/purchaseProductUseCase.js";
import getUserByIdUseCase from "../core/useCases/getUserByIdUseCase.js";
import getPurchasesByUserIdUseCase from "../core/useCases/getPurchasesByUserIdUseCase.js";
import getAllPurchasesUseCase from "../core/useCases/getAllPurchasesUseCase.js";

const createPurchase = async (req, res) => {
  const { products, user_id, total} = req.body;
  const result = await purchaseProductUseCase(products, user_id, total);
  return res.status(result.statusCode).json(result.payload);
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

export default {
  createPurchase,
  getAllPurchases,
  getPurchaseById,
  getPurchasesByUserId,
};
