import { Router } from "express";
import productController from "../controllers/product.controller.js"

const router = Router();

router.get("/", productController.getProducts);
router.get("/:id", productController.getProductById);
router.post("/", productController.createProduct);
router.delete("/:id", productController.deleteProduct);
router.put("/:id", productController.updateProduct);