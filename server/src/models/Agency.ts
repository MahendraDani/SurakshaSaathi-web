import mongoose from "mongoose";

const agencySchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String },
  email: { type: String },
  password: { type: String },
  createdOn: { type: String },
  createdAt: { type: [String] },
  pin: { type: String },
});

const Agency = mongoose.model("Agency", agencySchema);

export default Agency;
