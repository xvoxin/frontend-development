"use strict";

var _database = _interopRequireDefault(require("./database"));

var _vehicle = require("./vehicle");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var database = new _database["default"]();
database.addVehicle(new _vehicle.Hoverboard("BoostedBoard", 30, 5679.99, true, true));
var vehicles = database.getVehicles();
console.log(vehicles);