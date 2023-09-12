"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const auth_1 = __importDefault(require("./routes/auth"));
// import dbConnect from "./config/database";
const app = (0, express_1.default)();
const PORT = process.env.PORT;
// dbConnect();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("Hello from server made using typescript is this real yes this is heck real ");
});
app.use("/register", auth_1.default);
app.listen(PORT, () => {
    console.log(`Server running at PORT: ${PORT}`);
});
