import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import registerRoute from "./routes/auth";
import registerAgencyDetailsRoute from "./routes/details";
import getAllAgencyDetailsRoute from "./routes/getAllAgencyDetails";

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

app.get("/", validateUser, (req, res) => {
  res.send(
    "If you are seeing this message, it means you are logged into our website!"
  );
});
//@private
app.use("/api/agencies", getAllAgencyDetailsRoute);

//@public
app.use("/api/agencies", registerRoute);
app.use("/api/agencies", registerRoute);
app.use("/api/agencies", validateUser, registerAgencyDetailsRoute);

app.listen(PORT, () => {
  console.log(`Server running at PORT: ${PORT}`);
});
