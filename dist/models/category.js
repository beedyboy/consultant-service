"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var Schema = _mongoose["default"].Schema; // e.g Health, Law

var categorySchema = new Schema({
  name: {
    type: String,
    required: [true, "Please enter a category name"]
  }
}, {
  timestamps: true
});

var Category = _mongoose["default"].model('Category', categorySchema);

var _default = Category; // export default mongoose.models.Category ||  mongoose.model("Category", categorySchema); 
// export default mongoose.model("Category") ||  mongoose.model("Category", categorySchema); 

exports["default"] = _default;