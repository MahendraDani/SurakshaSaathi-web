import express from "express";
const router = express.Router();
import secureAgencyAccount from "../controllers/secure";
router.post("/secure", secureAgencyAccount);

export default secureAgencyAccount;
