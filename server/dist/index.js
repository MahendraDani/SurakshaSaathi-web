"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const auth_1 = __importDefault(require("./routes/auth"));
const details_1 = __importDefault(require("./routes/details"));
const database_1 = __importDefault(require("./config/database"));
const validateUser_1 = __importDefault(require("./middlewares/validateUser"));
const app = (0, express_1.default)();
const PORT = process.env.PORT;
(0, database_1.default)();
app.use((0, cors_1.default)({
    origin: ["http://localhost:5173"],
}));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get("/", validateUser_1.default, (req, res) => {
    res.send("If you are seeing this message, it means you are logged into our website!");
});
app.use("/api/agencies", auth_1.default);
app.use("/api/agencies", auth_1.default);
app.use("/api/agencies", details_1.default);
app.listen(PORT, () => {
    console.log(`Server running at PORT: ${PORT}`);
});
