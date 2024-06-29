import express from "express";
import {
  login,
  logout,
  myProfile,
  register,
  createOrganization,
} from "../controller/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/login", login);
router.get("/logout", isAuthenticated, logout);
router.get("/me", isAuthenticated, myProfile);
router.post("/register", register);
router.post("/organisation", isAuthenticated, createOrganization);

export default router;




