import { Router } from "express";
import purchaseController from "../controllers/purchase.controller.js"
import authMiddleware from "../infrastructure/webserver/middleware/auth.middleware.js"
import adminMiddleware from "../infrastructure/webserver/middleware/admin.middleware.js";

const router = Router();

router.get("/", authMiddleware, adminMiddleware, purchaseController.getAllPurchases);
router.get("/:id", authMiddleware, purchaseController.getPurchaseById);
router.get("/user/:uid", authMiddleware, purchaseController.getPurchasesByUserId);
router.post("/create", authMiddleware, purchaseController.createPurchase);

export default router;