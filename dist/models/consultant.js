"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var Schema = _mongoose["default"].Schema;
var ObjectId = Schema.Types.ObjectId;
var consultantSchema = new Schema({
  user: {
    type: String,
    "default": ""
  },
  officeName: {
    type: String,
    "default": ""
  },
  address: {
    type: String,
    "default": ""
  },
  country: {
    type: String,
    "default": ""
  },
  state: {
    type: String,
    "default": ""
  },
  region: {
    type: String,
    "default": ""
  },
  landmark: {
    type: String,
    "default": ""
  },
  phone: {
    type: String,
    "default": ""
  },
  specialization: [String],
  license: {
    type: String,
    "default": ""
  },
  acceptsHMO: {
    type: Boolean,
    "default": false
  },
  hmos: [{
    type: String,
    "default": ""
  }],
  gender: {
    type: String,
    "default": ""
  },
  language: {
    type: String,
    "default": ""
  },
  regNumber: {
    type: String,
    "default": ""
  },
  officePic: {
    type: String,
    "default": ""
  },
  cancellationPolicy: {
    type: String,
    "default": ""
  },
  skills: [String],
  statement: {
    type: String,
    "default": ""
  },
  rate: {
    type: Number
  },
  currency: {
    type: String,
    "default": ""
  },
  subcategory: {
    type: ObjectId,
    ref: "Division" // required: [true, "Category cannot be empty"],

  }
}, {
  timestamps: true
});

var Consultant = _mongoose["default"].model('Consultant', consultantSchema);

var _default = Consultant;
exports["default"] = _default;