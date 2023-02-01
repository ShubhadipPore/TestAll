import express from "express";
import {getAnalytics, postAnalytics} from '../controllers/analytics.js';


const router = express.Router();
router.get("/", getAnalytics);
router.post("/", postAnalytics);
export default router;