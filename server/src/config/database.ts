import exp from "constants";
import mongoose from "mongoose";

// Create a cluster on mongodb atlas first! and use the connection string here
const DATABASE_URL: string = "http://127.0.0.1/surakshasaathi";

const dbConnect = async () => {
  try {
    await mongoose
      .connect(DATABASE_URL)
      .then(() => {
        console.log("Connected to Database");
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;
