import { Router } from "express";
import userController from "../controllers/user.controller.js"
import authMiddleware from "../infrastructure/webserver/middleware/auth.middleware.js"
import adminMiddleware from "../infrastructure/webserver/middleware/admin.middleware.js";

const router = Router();

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/", authMiddleware, adminMiddleware, userController.getUsers);
router.get("/:id", authMiddleware, userController.getUserById);
router.delete("/:id", authMiddleware, adminMiddleware, userController.deleteUser);
router.put("/:id", authMiddleware, userController.updateUser);

export default router;