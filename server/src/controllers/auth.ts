import { Request, Response } from "express";
import Agency from "../models/Agency";

const registerAgency = async (req: Request, res: Response) => {
  try {
    const { name, age } = req.body;
    const agency = new Agency({
      name,
      age,
    });

    await agency.save();
    res.status(200).json(agency);
  } catch (error) {
    console.log(error);
  }
};

export default registerAgency;
