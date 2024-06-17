import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
require("dotenv").config();
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
import initRoute from "./src/routes";
import { sendMessage } from "./src/services/messageService";
import http from "http";

require("./src/config/connection_db");

let app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    method: ["GET, POST, OPTIONS, PUT, PATCH, DELETE"],
  })
);
//doc du lieu kieu json
app.use(express.json({ limit: "50mb" }));
//doc du lieu mang, object
app.use(
  express.urlencoded({
    extended: true,
    parameterLimit: 100000,
    limit: "100000000",
  })
);

initRoute(app);

//tạo một server HTTP bằng cách sử dụng http.createServer(),
const server = http.createServer(app);
//require("socket.io")(server, { cors: { origin: "*" } }) tạo một instance của Socket.io
//và gắn nó với server HTTP đã tạo.
//CORS (Cross-Origin Resource Sharing) được thiết lập để cho phép tất cả các nguồn gốc
//(origin: "*") có thể kết nối tới server này.
const socketIo = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

//Xử lý sự kiện sendDataClient:
//socket.on("sendDataClient", function (data) {...}) lắng nghe sự kiện sendDataClient từ client.
//Khi sự kiện này xảy ra, nó sẽ gọi hàm sendMessage(data)
// sau đó gửi dữ liệu (data) đến tất cả các client khác thông qua sự kiện sendDataServer.
socketIo.on("connection", (socket) => {
  console.log("New client connected >>>>>>>>>>>>>>>>>>>>" + socket.id);
  // socket.on lắng nghe sự kiện
  socket.on("sendDataClient", function (data) {
    sendMessage(data);
    //emit la gui
    socketIo.emit("sendDataServer", { data });
  });
  socket.on("loadRoomClient", function (data) {
    socketIo.emit("loadRoomServer", { data });
  });
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

let port = process.env.PORT || 2007;

server.listen(port, () => {
  console.log("Backend Nodejs is running on the port : " + port);
});
