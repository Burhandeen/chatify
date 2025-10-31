//const dot = require("dotenv");

import express from "express"
import dotenv from "dotenv"
import path from "path"

import authroutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import { connectDB } from "./lib/db.js"


dotenv.config();

//const express = require("express");

const app = express();
const __dirname = path.resolve();

const PORT = process.env.PORT || 2000;

app.use(express.json()); //req.body

app.use("/api/auth", authroutes);
app.use("/api/messages", messageRoutes);

//make ready for deployment
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")))

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
    })
}

app.listen(PORT, () => {
    console.log("Server running on port: " + PORT);
    connectDB();
})