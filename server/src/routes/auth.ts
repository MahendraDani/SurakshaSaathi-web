import express from "express";
const router = express.Router();

import signupAgency from "../controllers/auth";

router.post("/signup", signupAgency);

export default router;
