import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import router from "./routes/auth";
// import dbConnect from "./config/database";

const app = express();
const PORT = process.env.PORT;

// dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(
    "Hello from server made using typescript is this real yes this is heck real "
  );
});

app.use("/register", router);

app.listen(PORT, () => {
  console.log(`Server running at PORT: ${PORT}`);
});
