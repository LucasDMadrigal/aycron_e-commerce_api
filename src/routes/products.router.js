import { Router } from "express";
import productController from "../controllers/product.controller.js"
import authMiddleware from "../middlewares/auth.middleware.js";
import adminMiddleware from "../middlewares/admin.middleware.js";

const router = Router();

router.get("/", authMiddleware, productController.getProducts);
router.get("/:id", authMiddleware, productController.getProductById);
router.post("/", authMiddleware, adminMiddleware, productController.createProduct);
router.delete("/:id", authMiddleware, adminMiddleware, productController.deleteProduct);
router.put("/:id", authMiddleware, adminMiddleware, productController.updateProduct);