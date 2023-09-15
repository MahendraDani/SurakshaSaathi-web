import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import registerRoute from "./routes/auth";
import registerAgencyDetailsRoute from "./routes/details";
import getAllAgencyDetailsRoute from "./routes/getAllAgencyDetails";
import getAgencyDetailsRoute from "./routes/getAgencyDetails";

import dbConnect from "./config/database";
import validateUser from "./middlewares/validateUser";

const app = express();
const PORT = process.env.PORT;

dbConnect();
app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Home route!");
});
//@private
app.use("/api/agencies", getAllAgencyDetailsRoute);

//@public
app.use("/api/agencies", registerRoute);
app.use("/api/agencies", registerRoute);
app.use("/api/agencies", validateUser, registerAgencyDetailsRoute);
app.use("/api/agency", validateUser, getAgencyDetailsRoute);

app.listen(PORT, () => {
  console.log(`Server running at PORT: ${PORT}`);
});
