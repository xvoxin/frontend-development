"use strict";

var _database = require("./database");

var _vehicle = require("./vehicle");

var database = new _database.Database();
database.addVehicle(new _vehicle.Hoverboard("BoostedBoard", 30, 5679.99, true, true));
var vehicles = database.getVehicles();
console.log(vehicles);