require('dotenv').config()

const express = require("express");
// import { Express } from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("<h1>twitter</h1>");
});

app.get("/login", (req, res) => {
  res.send("<h1>login ho gaya h</h1>");
});

app.get("/youtube", (req, res) => {
  res.send('<h2>on your YouTube</h2>');
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${process.env.port}`);
});
