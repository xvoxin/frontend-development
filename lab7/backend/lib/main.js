"use strict";

var _vehicleService = require("./service/vehicleService");

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _vehicleFactory = require("./domain/vehicleFactory");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = new _express["default"]();
var port = 4000;
var vehicleFactory = new _vehicleFactory.VehicleFactory();
app.use(_bodyParser["default"].json());
var service = new _vehicleService.VehicleService();
app.get('/api/', function (req, res) {
  return res.send('Hello');
});
app.get('/api/vehicles/all', function (req, res) {
  return res.send(service.getVehicles());
});
app.post('/api/vehicles/create', function (req, res) {
  var vehicle = vehicleFactory.createVehicle(req);
  var result = service.addVehicle(vehicle);
  res.send({
    "result": result
  });
});
app.post('/api/vehicles/update', function (req, res) {
  var vehicle = vehicleFactory.createVehicle(req);
  var result = service.addVehicle(vehicle);
  res.send({
    "result": result
  });
});
app.post('/api/vehicles/delete', function (req, res) {
  var result = service.removeVehicle(req.body.name);
  res.send({
    "result": result
  });
});
app.listen(port, function () {
  return console.log("App listening on port ".concat(port));
});