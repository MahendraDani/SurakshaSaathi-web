import express from "express";
const router = express.Router();

import getAllAgencyDetails from "../controllers/getAllAgencyDetails";

router.get("/details", getAllAgencyDetails);

export default router;
