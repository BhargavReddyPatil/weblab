import express from "express";
import {
  getUsers,
  getAAT1Submissions,
  getAAT2Submissions,
  getRemedialSessions,
} from "../controllers/adminController.js";
import { authenticate } from "../middleware/authMiddleware.js";
import { isAdmin } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get("/users", authenticate, isAdmin, getUsers);
router.get("/aat1-submissions", authenticate, isAdmin, getAAT1Submissions);
router.get("/aat2-submissions", authenticate, isAdmin, getAAT2Submissions);
router.get("/remedial-sessions", authenticate, isAdmin, getRemedialSessions);

export default router;