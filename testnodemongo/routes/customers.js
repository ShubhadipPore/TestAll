
import express from "express";
import {getCustomers, postCustomers} from '../controllers/customers.js';


const router = express.Router();
router.get("/", getCustomers);
router.post("/", postCustomers);
export default router;