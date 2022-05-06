"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _multer = require("../config/multer");

var _cloudinary = require("../config/cloudinary");

var helper = {
  generateSlug: function generateSlug(data) {
    var slug = data.toLowerCase().replace(/[^\w ]+/g, "").replace(/ +/g, "-");
    return slug;
  },
  uploader: function () {
    var _uploader = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(file) {
      var reply, image;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              reply = null;
              image = (0, _multer.dataUri)(file).content;
              _context.next = 4;
              return _cloudinary.cloudinary.uploader.upload(image).then(function (data) {
                reply = data;
              })["catch"](function (err) {
                console.log(err);
              });

            case 4:
              return _context.abrupt("return", reply);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function uploader(_x) {
      return _uploader.apply(this, arguments);
    }

    return uploader;
  }(),
  imageArray: function imageArray(data) {
    return JSON.parse(data);
  }
};
module.exports = helper;