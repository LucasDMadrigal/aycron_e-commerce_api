import { Router } from "express";
import productController from "../controllers/product.controller.js"
import authMiddleware from "../infrastructure/webserver/middleware/auth.middleware.js"
import adminMiddleware from "../infrastructure/webserver/middleware/admin.middleware.js";

const router = Router();

router.get("/getAll", authMiddleware, productController.getProducts);
router.get("/get/:id", authMiddleware, productController.getProductById);
router.post("/create", authMiddleware, productController.createProduct);
router.delete("/delete/:id", authMiddleware, adminMiddleware, productController.deleteProduct);
router.put("/update/:id", authMiddleware, adminMiddleware, productController.updateProduct);

export default router;