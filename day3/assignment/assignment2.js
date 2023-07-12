const http = require("http");

const express = require("express");

const app = express();

app.use("/users",(req,res,next) =>{
    res.send("<h1>Party Party</h1>");
});

app.use("/",(req,res,next) =>{
    console.log("default case");
});

app.listen(1000);