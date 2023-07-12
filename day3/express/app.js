const http = require('http');

const express = require("express");

const app = express();



app.use("/add-product",(req,res,next) => {
    console.log("anotha one");
    res.send('<form action="/product method="POST"><input type="text" name="title"><button type"submit">Add Product  </input></form>');
});


app.use("/product",(req,res,next)=>{
    console.log(req.body);
    res.redirect("/");
});



app.use("/",(req,res,next) => {
    console.log("anotha one");
    res.send("<h1>HEllo from express</h1>");
});



app.listen(3000);

