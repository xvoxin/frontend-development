"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vehicle = require("./vehicle");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Database =
/*#__PURE__*/
function () {
  function Database() {
    _classCallCheck(this, Database);

    this._vehicles = [];
  }

  _createClass(Database, [{
    key: "addElectricScooter",
    value: function addElectricScooter(name, range, price, hasApp, wheelSize) {
      var scooter = new _vehicle.ElectricScooter(name, range, price, hasApp, wheelSize);

      if (isVehicleExistsInBase(scooter)) {
        console.log("Vehicle ${name} already exists in base!");
        return;
      }

      this._vehicles.push(scooter);
    }
  }, {
    key: "addVehicle",
    value: function addVehicle(vehicle) {
      if (isVehicleExistsInBase(vehicle)) {
        console.log("Given vehicle already exists in base!");
        return;
      }

      this._vehicles.push(vehicle);
    }
  }, {
    key: "removeVehicle",
    value: function removeVehicle(vehicle) {
      var vehicleIndex = this._vehicles.indexOf(vehicle);

      this._vehicle.splice(vehicleIndex, 1);
    }
  }, {
    key: "getVehicles",
    value: function getVehicles() {
      return this._vehicles;
    }
  }, {
    key: "isVehicleExistsInBase",
    value: function isVehicleExistsInBase(vehicle) {
      this._vehicles.forEach(function (element) {
        if (element == vehicle) return true;
      });

      return false;
    }
  }]);

  return Database;
}();

exports["default"] = Database;