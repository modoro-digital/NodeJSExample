var controllers = require("../controllers/index");
const express = require("express");
var web = express();

web.get("/", controllers.main);
web.get("/getdata", controllers.getdata);
web.get("/delete/:id", controllers.delete);
web.post("/add", controllers.add);
web.post("/edit", controllers.edit);

module.exports = web;
