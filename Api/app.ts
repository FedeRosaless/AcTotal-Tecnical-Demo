import express from "express";
import * as dotenv from "dotenv";
import { connectDB } from "./db";
import userRoutes from "./src/routes/user.routes";
dotenv.config();
const app = express();
const cors = require('cors')
app.use(express.json());
app.use(cors())
import http from "http";
const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  connectDB();
});
app.set("port", process.env.PORT );

app.use("/users", userRoutes);
