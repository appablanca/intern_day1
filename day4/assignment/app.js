const path = require("path");
const express = require("express");
const app = express();

const mainPageRoutes = require("./routes/mainPage");

app.use(express.static(path.join(__dirname, "public")));

app.use(mainPageRoutes);


app.listen(1000);