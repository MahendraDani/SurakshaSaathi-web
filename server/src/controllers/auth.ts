import { Request, Response } from "express";

const registerAgency = (req: Request, res: Response) => {
  // const { name: string, age: number } = req.body;
  res.send("Agencires register from here");
};

export default registerAgency;
