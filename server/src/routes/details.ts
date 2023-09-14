import express from "express";
const router = express.Router();

import registerAgencyDetails from "../controllers/details";

router.post("/details/:id", registerAgencyDetails);

export default router;
