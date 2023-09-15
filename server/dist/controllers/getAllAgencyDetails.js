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
const AgencyDetails_1 = __importDefault(require("../models/AgencyDetails"));
const statuscodes_1 = __importDefault(require("../globals/statuscodes"));
const getAllAgencyDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allAgencyDetails = yield AgencyDetails_1.default.find();
        res.status(statuscodes_1.default.SUCCESS).json(allAgencyDetails);
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = getAllAgencyDetails;
