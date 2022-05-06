"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var dbConnect = function dbConnect(url) {
  try {
    _mongoose["default"].Promise = global.Promise;

    _mongoose["default"].connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(function () {
      console.log('Consultation database connected');
    })["catch"](function (err) {
      return console.log(err.message);
    });
  } catch (error) {
    console.log("Error with consultant db [".concat(error, "]"));
  }
};

var _default = dbConnect;
exports["default"] = _default;