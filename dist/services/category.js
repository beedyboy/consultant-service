"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _category = _interopRequireDefault(require("../models/category"));

var CategoryService = /*#__PURE__*/(0, _createClass2["default"])(function CategoryService() {
  (0, _classCallCheck2["default"])(this, CategoryService);
  (0, _defineProperty2["default"])(this, "getAll", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _category["default"].find({});

          case 3:
            return _context.abrupt("return", _context.sent);

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            throw _context.t0;

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  })));
  (0, _defineProperty2["default"])(this, "getById", /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _category["default"].findById(id).then(function (data, err) {
                if (err) {
                  throw "Category not found";
                }

                return {
                  status: 200,
                  data: data
                };
              });

            case 3:
              return _context2.abrupt("return", _context2.sent);

            case 6:
              _context2.prev = 6;
              _context2.t0 = _context2["catch"](0);
              throw _context2.t0;

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 6]]);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "create", /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(name) {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              return _context3.abrupt("return", _category["default"].create(name).then(function (data, err) {
                if (err) {
                  throw err;
                } else {
                  return {
                    status: 201,
                    message: "Category created successfully",
                    data: data
                  };
                }
              }));

            case 4:
              _context3.prev = 4;
              _context3.t0 = _context3["catch"](0);
              throw _context3.t0;

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 4]]);
    }));

    return function (_x2) {
      return _ref3.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "update", /*#__PURE__*/function () {
    var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id, payload) {
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _category["default"].findByIdAndUpdate(id, payload).then(function (data, err) {
                if (data) {
                  return {
                    status: 200,
                    message: "Record updated successfully"
                  };
                }
              });

            case 3:
              return _context4.abrupt("return", _context4.sent);

            case 6:
              _context4.prev = 6;
              _context4.t0 = _context4["catch"](0);
              throw _context4.t0;

            case 9:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 6]]);
    }));

    return function (_x3, _x4) {
      return _ref4.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "remove", /*#__PURE__*/function () {
    var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return _category["default"].findByIdAndDelete(id).then(function (dt, err) {
                if (dt) {
                  return {
                    status: 200,
                    message: "Category deleted successfully"
                  };
                }
              });

            case 3:
              _context5.next = 8;
              break;

            case 5:
              _context5.prev = 5;
              _context5.t0 = _context5["catch"](0);
              throw _context5.t0;

            case 8:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 5]]);
    }));

    return function (_x5) {
      return _ref5.apply(this, arguments);
    };
  }());
});
var _default = CategoryService;
exports["default"] = _default;