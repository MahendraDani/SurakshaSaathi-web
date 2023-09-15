import { Request, Response } from "express";
import Agency from "../models/Agency";
import AgencyDetails from "../models/AgencyDetails";
import statusCodes from "../globals/statuscodes";

const getAgencyDetails = async (req: Request, res: Response) => {
  try {
    let id = req.headers.id;
    if (id === "") {
      return res
        .status(statusCodes.BAD_REQUEST)
        .json({ message: "Agency ID is required!" });
    }

    const agency = await AgencyDetails.findOne({ id: id });
    if (!agency) {
      return res
        .status(statusCodes.FORBIDDEN)
        .json({ messaage: "Invalid or incorrect ID" });
    }
    res.status(statusCodes.SUCCESS).json({ agency: agency });
  } catch (error) {
    console.log(error);
  }
};

export default getAgencyDetails;
