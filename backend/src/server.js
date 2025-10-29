//const dot = require("dotenv");

import express from "express"
import dotenv from "dotenv"

import authroutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"


dotenv.config();

//const express = require("express");

const app = express();

const PORT = process.env.PORT || 2000;

app.use("/api/auth", authroutes);
app.use("/api/messages", messageRoutes);

app.listen(PORT, () => console.log("Server is running on port: " + PORT));