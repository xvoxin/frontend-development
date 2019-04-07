"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hoverboard = exports.ElectricScooter = exports.ElectricVehicle = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ElectricVehicle =
/*#__PURE__*/
function () {
  function ElectricVehicle(name, range, price, hasApp) {
    _classCallCheck(this, ElectricVehicle);

    this._name = name;
    this._range = range;
    this._price = price;
    this._hasApp = hasApp;
  }

  _createClass(ElectricVehicle, [{
    key: "name",
    get: function get() {
      return this._name;
    },
    set: function set(value) {
      this._name = value;
    }
  }, {
    key: "range",
    get: function get() {
      return this._range;
    },
    set: function set(value) {
      this._range = value;
    }
  }, {
    key: "price",
    get: function get() {
      return this.price;
    },
    set: function set(value) {
      this._price = value;
    }
  }, {
    key: "hasApp",
    get: function get() {
      return this._hasApp;
    },
    set: function set(value) {
      this._hasApp = hasApp;
    }
  }]);

  return ElectricVehicle;
}();

exports.ElectricVehicle = ElectricVehicle;

var ElectricScooter =
/*#__PURE__*/
function (_ElectricVehicle) {
  _inherits(ElectricScooter, _ElectricVehicle);

  function ElectricScooter(name, range, price, hasApp, wheelSize) {
    var _this;

    _classCallCheck(this, ElectricScooter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ElectricScooter).call(this, name, range, price, hasApp));
    _this._wheelSize = wheelSize;
    return _this;
  }

  _createClass(ElectricScooter, [{
    key: "wheelSize",
    get: function get() {
      return this._wheelSize;
    },
    set: function set(value) {
      this._wheelSize = wheelSize;
    }
  }]);

  return ElectricScooter;
}(ElectricVehicle);

exports.ElectricScooter = ElectricScooter;

var Hoverboard =
/*#__PURE__*/
function (_ElectricVehicle2) {
  _inherits(Hoverboard, _ElectricVehicle2);

  function Hoverboard(name, range, price, hasApp, hasBackpack) {
    var _this2;

    _classCallCheck(this, Hoverboard);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Hoverboard).call(this, name, range, price, hasApp));
    _this2._hasBackpack = hasBackpack;
    return _this2;
  }

  _createClass(Hoverboard, [{
    key: "hasBackpack",
    get: function get() {
      return this._hasBackpack;
    },
    set: function set(value) {
      this._hasBackpack = value;
    }
  }]);

  return Hoverboard;
}(ElectricVehicle);

exports.Hoverboard = Hoverboard;