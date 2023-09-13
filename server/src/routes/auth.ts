import express from "express";
const router = express.Router();

import { signupAgency, loginAgency } from "../controllers/auth";

router.post("/signup", signupAgency);
router.post("/login", loginAgency);

export default router;
