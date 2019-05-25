"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VehicleFactory = void 0;

var _vehicle = require("../domain/vehicle");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TYPE_HOVERBOARD = "hoverboard";
var TYPE_SCOOTER = "scooter";

var VehicleFactory =
/*#__PURE__*/
function () {
  function VehicleFactory() {
    _classCallCheck(this, VehicleFactory);
  }

  _createClass(VehicleFactory, [{
    key: "createVehicle",
    value: function createVehicle(request) {
      var vehicle;

      switch (request.body.type) {
        case TYPE_HOVERBOARD:
          vehicle = this.createHoverboard(request.body.name, request.body.range, request.body.price, request.body.hasApp, request.body.hasBackpack);
          break;

        case TYPE_SCOOTER:
          vehicle = this.createElectricScooter(request.body.name, request.body.range, request.body.price, request.body.hasApp, request.body.wheelSize);
          break;

        default:
          vehicle = this.createElectricVehicle(request.body.name, request.body.range, request.body.price, request.body.hasApp);
          break;
      }

      return vehicle;
    }
  }, {
    key: "createHoverboard",
    value: function createHoverboard(name, range, price, hasApp, hasBackpack) {
      return new _vehicle.Hoverboard(name, range, price, hasApp, hasBackpack);
    }
  }, {
    key: "createElectricScooter",
    value: function createElectricScooter(name, range, price, hasApp, wheelSize) {
      return new _vehicle.ElectricScooter(name, range, price, hasApp, wheelSize);
    }
  }, {
    key: "createElectricVehicle",
    value: function createElectricVehicle(name, range, price, hasApp) {
      return new _vehicle.ElectricScooter(name, range, price, hasApp);
    }
  }]);

  return VehicleFactory;
}();

exports.VehicleFactory = VehicleFactory;