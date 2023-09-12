import express from "express";
const router = express.Router();

import registerAgency from "../controllers/auth";

router.post("/", registerAgency);

export default router;
