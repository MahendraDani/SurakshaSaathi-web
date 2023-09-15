"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Agency_1 = __importDefault(require("../models/Agency"));
const statuscodes_1 = __importDefault(require("../globals/statuscodes"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const secureAgencyAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.headers.id;
        if (!id) {
            return res
                .status(statuscodes_1.default.BAD_REQUEST)
                .json({ message: "Id is required" });
        }
        const agency = yield Agency_1.default.findOne({ id });
        if (!agency) {
            return res
                .status(statuscodes_1.default.FORBIDDEN)
                .json({ message: "Invalid or incorrect ID" });
        }
        const { pincode } = req.body;
        const hashedPincode = yield bcryptjs_1.default.hash(pincode, 10);
        const agencyMongoId = agency._id;
        yield Agency_1.default.findByIdAndUpdate(agencyMongoId, {
            pin: hashedPincode,
        });
        const updatedAgency = yield Agency_1.default.findById(agencyMongoId);
        res.status(statuscodes_1.default.SUCCESS).json({ agency: updatedAgency });
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = secureAgencyAccount;
