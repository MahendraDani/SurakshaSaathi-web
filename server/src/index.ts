import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import http from "http";
import registerRoute from "./routes/auth";
import registerAgencyDetailsRoute from "./routes/details";
import getAllAgencyDetailsRoute from "./routes/getAllAgencyDetails";
import getAgencyDetailsRoute from "./routes/getAgencyDetails";
import secureAgencyAccountRoute from "./routes/secure";
import { Server } from "socket.io";
import dbConnect from "./config/database";
import SocketIOClient from 'socket.io';
import validateUser from "./middlewares/validateUser";

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT;

dbConnect();
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Home route!");
});
//@private
app.use("/api/agencies", getAllAgencyDetailsRoute);

//@public
app.use("/api/agencies", registerRoute);
app.use("/api/agencies", registerRoute);
app.use("/api/agency", validateUser, secureAgencyAccountRoute);
app.use("/api/agency", validateUser, getAgencyDetailsRoute);
app.use("/api/agencies", validateUser, registerAgencyDetailsRoute);

interface Chat {
  socket: SocketIOClient.Socket;
  username1: string;
  username2: string;
}

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
