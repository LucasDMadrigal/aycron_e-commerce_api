import { Router } from "express";
import userController from "../controllers/user.controller.js"
const router = Router();

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/", userController.getUsers);
router.get("/:id", userController.getUserById);
router.delete("/:id", userController.deleteUser);
router.put("/:id", userController.updateUser);
export default router;