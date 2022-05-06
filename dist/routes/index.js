"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _category = _interopRequireDefault(require("./category"));

var _division = _interopRequireDefault(require("./division"));

var _consultation = _interopRequireDefault(require("./consultation"));

var _express = _interopRequireDefault(require("express"));

var routes = _express["default"].Router();

routes.use("/category", _category["default"]);
routes.use("/division", _division["default"]);
routes.use("/consultation", _consultation["default"]);
var _default = routes;
exports["default"] = _default;