import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import statusCodes from "../globals/statuscodes";
const validateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res
        .status(statusCodes.FORBIDDEN)
        .json({ message: "Access token is required!" });
    } else {
      const isMatch = jwt.verify(token, process.env.JWT_SECRET || "");
      if (!isMatch) {
        return res
          .status(statusCodes.UNAUTHORIZED)
          .json({ message: "Invalid or incorrect token" });
      } else {
        next();
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export default validateUser;
