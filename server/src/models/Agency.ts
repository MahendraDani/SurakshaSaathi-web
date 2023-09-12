import mongoose from "mongoose";

const agencySchema = new mongoose.Schema({
  name: { type: String },
  age: { type: Number },
});

const Agency = mongoose.model("Agency", agencySchema);

export default Agency;
