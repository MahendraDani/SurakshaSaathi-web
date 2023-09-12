"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const agencySchema = new mongoose_1.default.Schema({
    name: { type: String },
    age: { type: Number },
});
const Agency = mongoose_1.default.model("Agency", agencySchema);
exports.default = Agency;
