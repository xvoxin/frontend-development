"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VehicleService = void 0;

var _vehicle = require("../domain/vehicle");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var VehicleService =
/*#__PURE__*/
function () {
  function VehicleService() {
    _classCallCheck(this, VehicleService);

    this._vehicles = [new _vehicle.ElectricScooter("Xiaomi MiJia", 30, 1599.99, true, 6), new _vehicle.Hoverboard("Boosted Board 2", 23, 6755.99, true, false), new _vehicle.ElectricScooter("Xiaomi MiJia Pro", 45, 2599.99, true, 6), new _vehicle.Hoverboard("Koowheel", 26, 2575.99, false, false)];
  }

  _createClass(VehicleService, [{
    key: "isVehicleExistsInBase",
    value: function isVehicleExistsInBase(vehicle) {
      this._vehicles.forEach(function (element) {
        if (element == vehicle) return true;
      });

      return false;
    }
  }, {
    key: "addVehicle",
    value: function addVehicle(vehicle) {
      if (this.isVehicleExistsInBase(vehicle)) {
        console.log("Given vehicle already exists in base!");
        return false;
      }

      this._vehicles.push(vehicle);

      return true;
    }
  }, {
    key: "removeVehicle",
    value: function removeVehicle(name) {
      var vehicleIndex = this._vehicles.findIndex(function (element) {
        return element.name === name;
      });

      if (vehicleIndex === -1) return false;

      this._vehicles.splice(vehicleIndex, 1);

      return true;
    }
  }, {
    key: "updateVehicle",
    value: function updateVehicle(vehicle) {
      var vehicleIndex = this._vehicles.findIndex(function (element) {
        return element.name === vehicle.name;
      });

      if (vehicleIndex === -1) return false;
      this._vehicles[vehicleIndex] = vehicle;
      return true;
    }
  }, {
    key: "getVehicles",
    value: function getVehicles() {
      return this._vehicles;
    }
  }]);

  return VehicleService;
}();

exports.VehicleService = VehicleService;