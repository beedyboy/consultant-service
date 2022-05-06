"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _division = _interopRequireDefault(require("../controllers/division"));

var router = _express["default"].Router();

var division = new _division["default"]();
router.get("/", division.getAll);
router.get("/:id", division.getById);
router.post("/", division.create);
router.put("/", division.update);
router["delete"]("/:id", division.remove);
var _default = router;
exports["default"] = _default;