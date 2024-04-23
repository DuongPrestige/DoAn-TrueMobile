import cors from "cors";
import express from "express";
require("dotenv").config();

import initRoute from "./src/routes";

require("./src/config/connection_db");

const app = express();

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

const PORT = process.env.PORT || 2007;
const listener = app.listen(PORT, () => {
  console.log("Server is running on the port " + listener.address().port);
});
