import { Request, Response } from "express";
import AgencyDetails from "../models/AgencyDetails";
import statusCodes from "../globals/statuscodes";

const getAllAgencyDetails = async (req: Request, res: Response) => {
  try {
    const allAgencyDetails = await AgencyDetails.find();
    res.status(statusCodes.SUCCESS).json(allAgencyDetails);
  } catch (error) {
    console.log(error);
  }
};

export default getAllAgencyDetails;
