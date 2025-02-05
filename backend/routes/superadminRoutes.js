import express from "express";
import {
  getAllUsers,
  editUserRole,
  deleteUser,
  whitelistEmail,
  whitelistEmailsBulk,
} from "../controllers/superadminController.js";
import { authenticate } from "../middleware/authMiddleware.js";
import { isSuperadmin } from "../middleware/roleMiddleware.js";
import multer from "multer";

const router = express.Router();
const upload = multer();

// Apply authenticate middleware first, then isSuperadmin middleware
router.get("/users", authenticate, isSuperadmin, getAllUsers);
router.put("/users/:userId/role", authenticate, isSuperadmin, editUserRole);
router.delete("/users/:userId", authenticate, isSuperadmin, deleteUser);
router.post("/whitelist", authenticate, isSuperadmin, whitelistEmail);
router.post("/whitelist/bulk", authenticate, isSuperadmin, upload.single("file"), whitelistEmailsBulk);

export default router;