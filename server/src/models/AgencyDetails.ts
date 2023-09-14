import mongoose from "mongoose";

const AgencyDetailsSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  location: {
    address: String,
    city: String,
    pincode: String,
    state: String,
    country: String,
    helplineNumbers: [String],
  },
  areasOfExpertise: [String],
  resources: [
    {
      workforce: String,
      foodSupply: [
        {
          foodItem: String,
          foodItemQuantity: Number,
        },
      ],
      vehicles: [
        {
          vehicle: String,
          modeOfTransport: String,
          vehicleQuantity: Number,
        },
      ],
    },
  ],
});

const AgencyDetails = mongoose.model("AgencyDetails", AgencyDetailsSchema);
export default AgencyDetails;
