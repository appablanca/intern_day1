const http = require('http');

const express = require("express");

const app = express();



app.use("/add-product",(req,res,next) => {
    console.log("anotha one");
    res.send("<h1>Add product</h1>");
});






app.use("/",(req,res,next) => {
    console.log("anotha one");
    res.send("<h1>HEllo from express</h1>");
});



app.listen(3000);

