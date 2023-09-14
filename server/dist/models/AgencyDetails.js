"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const AgencyDetailsSchema = new mongoose_1.default.Schema({
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
const AgencyDetails = mongoose_1.default.model("AgencyDetails", AgencyDetailsSchema);
exports.default = AgencyDetails;
