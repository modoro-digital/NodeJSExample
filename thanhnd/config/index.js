const express = require("express");

const app = express();

const mongoose = require("mongoose");

var bodyParser = require('body-parser');

var web = require("../routes/web.js");

var name_dbs = "test";

var url = "mongodb://127.0.0.1:27017/" + name_dbs;

mongoose.Promise = global.Promise;

mongoose.connect(url);

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(web);

module.exports = app;