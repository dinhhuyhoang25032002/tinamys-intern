import express from "express";
import userController from "../app/controllers/UserController.js";
const router = express.Router();

router.post("/login", userController.handleLogin);
router.post("/sign-up", userController.handleCreateUser);
router.get("/get-by-id", userController.getById);
router.get("/:slug", userController.getUserBySlug);
router.get("/", userController.getUser);

export default router;
