/// <reference path="models/mongoose.js" />
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
//var mongodb = require("mongodb");
//var bcrypt = require("bcryptjs");
//var hash = bcrypt.hashSync("bacon");

//console.log(bcrypt.compareSync("bacon", hash)); // true
//console.log(bcrypt.compareSync("veggies", hash)); // false
var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

var user = require("./api/user");
app.use("/user", user);

var server = app.listen(process.env.PORT || 8080, function () {
        var port = server.address().port;
        console.log("App now running on port", port);
    });

