import { Request, Response } from "express";
import statusCodes from "../globals/statuscodes";
import AgencyDetails from "../models/AgencyDetails";
import Agency from "../models/Agency";

type FoodSupply = [
  {
    foodItem: string;
    foodItemQuantity: number;
  }
];
type Vehicle = [
  {
    vehicle: string;
    modeOfTransport: string;
    vechileQuantity: number;
  }
];

type Location = {
  address: string;
  city: string;
  pincode: string;
  state: string;
  country: string;
  helplineNumbers: [string];
};

type Resources = {
  workforce: number;
  foodSupply: FoodSupply;
  vehicles: Vehicle;
};

type areasOfExpertise = string[];
const registerAgencyDetails = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res
        .status(statusCodes.BAD_REQUEST)
        .json({ message: "Id is required!" });
    }

    const agency = await Agency.findOne({ id });
    const agencyId = agency?.id;
    const agencyName = agency?.name;
    const agencyEmail = agency?.email;

    if (id !== agencyId) {
      return res
        .status(statusCodes.FORBIDDEN)
        .json({ message: "Invalid or incorect id" });
    }

    const AgencyDetailsExists = await AgencyDetails.findOne({ id });
    if (AgencyDetailsExists) {
      return res
        .status(statusCodes.FORBIDDEN)
        .json({ message: "Agency details already exists" });
    }

    const {
      location,
      areasOfExpertise,
      resources,
    }: {
      location: Location;
      areasOfExpertise: areasOfExpertise;
      resources: Resources;
    } = req.body;

    const AgencyDetail = new AgencyDetails({
      id: agencyId,
      name: agencyName,
      email: agencyEmail,
      location,
      areasOfExpertise,
      resources,
    });

    await AgencyDetail.save();
    res.status(statusCodes.SUCCESS).json({ AgencyDetail });
  } catch (error) {
    console.log(error);
  }
};

export default registerAgencyDetails;
