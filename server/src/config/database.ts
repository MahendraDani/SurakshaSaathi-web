import mongoose from "mongoose";

// Create a cluster on mongodb atlas first! and use the connection string here
const DATABASE_URL =
  "mongodb+srv://mahendra:mahendra@cluster0.icsqugq.mongodb.net/surakshasaathi?retryWrites=true&w=majority";

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
