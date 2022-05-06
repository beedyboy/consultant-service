"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var Schema = _mongoose["default"].Schema;
var ObjectId = Schema.Types.ObjectId; // E.g. Health => Doctor
// E.g. Strategy => business strategy

var divisionSchema = new Schema({
  category: {
    type: ObjectId,
    ref: "Category",
    required: [true, "Category cannot be empty"]
  },
  division: {
    type: String,
    required: [true, "You must provide a division"]
  }
}, {
  timestamps: true
});

var Division = _mongoose["default"].model("Division", divisionSchema);

var _default = Division;
exports["default"] = _default;