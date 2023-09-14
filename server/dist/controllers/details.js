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
const statuscodes_1 = __importDefault(require("../globals/statuscodes"));
const AgencyDetails_1 = __importDefault(require("../models/AgencyDetails"));
const Agency_1 = __importDefault(require("../models/Agency"));
const registerAgencyDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if (!id) {
            return res
                .status(statuscodes_1.default.BAD_REQUEST)
                .json({ message: "Id is required!" });
        }
        const agency = yield Agency_1.default.findOne({ id });
        const agencyId = agency === null || agency === void 0 ? void 0 : agency.id;
        const agencyName = agency === null || agency === void 0 ? void 0 : agency.name;
        const agencyEmail = agency === null || agency === void 0 ? void 0 : agency.email;
        if (id !== agencyId) {
            return res
                .status(statuscodes_1.default.FORBIDDEN)
                .json({ message: "Invalid or incorect id" });
        }
        const AgencyDetailsExists = yield AgencyDetails_1.default.findOne({ id });
        if (AgencyDetailsExists) {
            return res
                .status(statuscodes_1.default.FORBIDDEN)
                .json({ message: "Agency details already exists" });
        }
        const { location, areasOfExpertise, resources, } = req.body;
        const AgencyDetail = new AgencyDetails_1.default({
            id: agencyId,
            name: agencyName,
            email: agencyEmail,
            location,
            areasOfExpertise,
            resources,
        });
        yield AgencyDetail.save();
        res.status(statuscodes_1.default.SUCCESS).json({ AgencyDetail });
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = registerAgencyDetails;
