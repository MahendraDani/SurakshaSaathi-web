import { Request, Response } from "express";
import Agency from "../models/Agency";
import statusCodes from "../globals/statuscodes";
import bcryptjs from "bcryptjs";

const secureAgencyAccount = async (req: Request, res: Response) => {
  try {
    const id = req.headers.id;
    if (!id) {
      return res
        .status(statusCodes.BAD_REQUEST)
        .json({ message: "Id is required" });
    }

    const agency = await Agency.findOne({ id });
    if (!agency) {
      return res
        .status(statusCodes.FORBIDDEN)
        .json({ message: "Invalid or incorrect ID" });
    }
    const { pincode } = req.body;
    const hashedPincode = await bcryptjs.hash(pincode, 10);
    const agencyMongoId = agency._id;
    await Agency.findByIdAndUpdate(agencyMongoId, {
      pin: hashedPincode,
    });

    const updatedAgency = await Agency.findById(agencyMongoId);
    res.status(statusCodes.SUCCESS).json({ agency: updatedAgency });
  } catch (error) {
    console.log(error);
  }
};

export default secureAgencyAccount;
