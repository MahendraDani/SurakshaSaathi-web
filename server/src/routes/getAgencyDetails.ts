import express from "express";
const router = express.Router();

import getAgencyDetails from "../controllers/getAgencyDetails";

router.get("/details/", getAgencyDetails);

export default getAgencyDetails;
