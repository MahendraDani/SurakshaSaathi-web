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
const http_1 = __importDefault(require("http"));
const auth_1 = __importDefault(require("./routes/auth"));
const details_1 = __importDefault(require("./routes/details"));
const getAllAgencyDetails_1 = __importDefault(require("./routes/getAllAgencyDetails"));
const getAgencyDetails_1 = __importDefault(require("./routes/getAgencyDetails"));
const secure_1 = __importDefault(require("./routes/secure"));
const socket_io_1 = require("socket.io");
const database_1 = __importDefault(require("./config/database"));
const validateUser_1 = __importDefault(require("./middlewares/validateUser"));
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const PORT = process.env.PORT;
(0, database_1.default)();
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
    },
});
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("Home route!");
});
//@private
app.use("/api/agencies", getAllAgencyDetails_1.default);
//@public
app.use("/api/agencies", auth_1.default);
app.use("/api/agencies", auth_1.default);
app.use("/api/agency", validateUser_1.default, secure_1.default);
app.use("/api/agency", validateUser_1.default, getAgencyDetails_1.default);
app.use("/api/agencies", validateUser_1.default, details_1.default);
io.on("connection", (socket) => {
    socket.on("join_chat", (data) => {
        socket.join(data);
        console.log(`User with id: ${socket.id} joined with: ${data}`);
    });
    socket.on("send_message", (data) => {
        socket.to(data.reciver).emit("receive_message", data);
    });
    socket.on("disconnect", () => {
        console.log("User Disconnected", socket.id);
    });
});
server.listen(PORT, () => {
    console.log(`Server running at PORT: ${PORT}`);
});
