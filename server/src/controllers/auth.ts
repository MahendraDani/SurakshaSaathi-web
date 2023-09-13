import { Request, Response } from "express";
import Agency from "../models/Agency";
import statusCodes from "../globals/statuscodes";
import bcyrpt from "bcryptjs";
import { v4 as uuid } from "uuid";
import jwt from "jsonwebtoken";

import date from "../utils/date";
import setTime from "../utils/time";

const signupAgency = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res
        .status(statusCodes.BAD_REQUEST)
        .json({ message: "All fields are required" });
    }

    const existingUser = await Agency.findOne({ email });
    if (existingUser) {
      return res
        .status(statusCodes.CONFLICT)
        .json({ message: "Agency already exists with the given email" });
    }

    const hashedPassword: string = await bcyrpt.hash(password, 10);
    const agency = new Agency({
      id: uuid(),
      name: name,
      email: email,
      password: hashedPassword,
      createdOn: date,
      createdAt: setTime(),
    });

    await agency.save();

    const token = jwt.sign(
      {
        name: name,
        email: email,
      },
      process.env.JWT_SECRET || "",
      {
        expiresIn: "3h",
      }
    );

    return res.status(statusCodes.CREATED).json({ agency, accessToken: token });
  } catch (error) {
    console.log(error);
  }
};

export default signupAgency;
