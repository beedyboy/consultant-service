"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _category = _interopRequireDefault(require("../controllers/category"));

var router = _express["default"].Router();

var Category = new _category["default"]();
router.get("/", Category.getAll);
router.get("/:id", Category.getById);
router.get("/", Category.getAll);
router.post("/", Category.create);
router.put("/", Category.update);
router["delete"]("/:id", Category.remove);
var _default = router;
exports["default"] = _default;