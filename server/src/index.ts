import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send(
    "Hello from server made using typescript is this real yes this is heck real "
  );
});

app.listen(PORT, () => {
  console.log(`Server running at PORT: ${PORT}`);
});
