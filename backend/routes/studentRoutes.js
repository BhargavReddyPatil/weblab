import express from "express";
import {
  getAAT1,
  uploadCertificate,
  getAAT2,
  submitAAT2,
  getRemedialSessions,
  getStatistics,
} from "../controllers/studentController.js";
import { authenticate } from "../middleware/authMiddleware.js";
import { isStudent } from "../middleware/roleMiddleware.js";

const router = express.Router();

// Apply authenticate middleware first, then isStudent middleware
router.get("/aat1", authenticate, isStudent, getAAT1);
router.post("/aat1/upload", authenticate, isStudent, uploadCertificate);
router.get("/aat2", authenticate, isStudent, getAAT2);
router.post("/aat2/submit", authenticate, isStudent, submitAAT2);
router.get("/remedial-sessions", authenticate, isStudent, getRemedialSessions);
router.get("/statistics", authenticate, isStudent, getStatistics);

export default router;