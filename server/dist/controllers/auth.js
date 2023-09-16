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
exports.loginAgency = exports.signupAgency = void 0;
const Agency_1 = __importDefault(require("../models/Agency"));
const statuscodes_1 = __importDefault(require("../globals/statuscodes"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const uuid_1 = require("uuid");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const date_1 = __importDefault(require("../utils/date"));
const time_1 = __importDefault(require("../utils/time"));
const signupAgency = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res
                .status(statuscodes_1.default.BAD_REQUEST)
                .json({ message: "All fields are required" });
        }
        const existingUser = yield Agency_1.default.findOne({ email });
        if (existingUser) {
            return res
                .status(statuscodes_1.default.CONFLICT)
                .json({ message: "Agency already exists with the given email" });
        }
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        const agency = new Agency_1.default({
            id: (0, uuid_1.v4)(),
            name: name,
            email: email,
            password: hashedPassword,
            createdOn: date_1.default,
            createdAt: (0, time_1.default)(),
        });
        yield agency.save();
        const token = jsonwebtoken_1.default.sign({
            name: name,
            email: email,
        }, process.env.JWT_SECRET || "", {
            expiresIn: "3h",
        });
        return res.status(statuscodes_1.default.CREATED).json({ agency, accessToken: token });
    }
    catch (error) {
        console.log(error);
    }
});
exports.signupAgency = signupAgency;
const loginAgency = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res
                .status(statuscodes_1.default.BAD_REQUEST)
                .json({ message: "All fields are required!" });
        }
        const existingUser = yield Agency_1.default.findOne({ email });
        if (!existingUser) {
            return res
                .status(statuscodes_1.default.FORBIDDEN)
                .json({ message: "User is not signed up!" });
        }
        const isPasswordMatch = bcryptjs_1.default.compare(password, existingUser.password || "");
        if (!isPasswordMatch) {
            return res
                .status(statuscodes_1.default.UNAUTHORIZED)
                .json({ message: "Incorrect or invaild credentials" });
        }
        const token = jsonwebtoken_1.default.sign({
            name: existingUser.name,
            email: existingUser.email,
        }, process.env.JWT_SECRET || "", {
            expiresIn: "3h",
        });
        return res
            .status(200)
            .json({
            message: "User signed in successfully",
            accessToken: token,
            user: existingUser,
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.loginAgency = loginAgency;
