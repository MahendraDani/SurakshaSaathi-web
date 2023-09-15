"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const agencySchema = new mongoose_1.default.Schema({
    id: { type: String },
    name: { type: String },
    email: { type: String },
    password: { type: String },
    createdOn: { type: String },
    createdAt: { type: [String] },
    pin: { type: String },
});
const Agency = mongoose_1.default.model("Agency", agencySchema);
exports.default = Agency;
