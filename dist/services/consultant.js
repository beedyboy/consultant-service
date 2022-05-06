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

var _consultant = _interopRequireDefault(require("../models/consultant"));

var ConsultantService = /*#__PURE__*/(0, _createClass2["default"])(function ConsultantService() {
  (0, _classCallCheck2["default"])(this, ConsultantService);
  (0, _defineProperty2["default"])(this, "getAll", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _consultant["default"].find({});

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
  (0, _defineProperty2["default"])(this, "create", /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(payload) {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              return _context2.abrupt("return", _consultant["default"].create(payload).then(function (data, err) {
                if (err) {
                  throw err;
                } else {
                  return {
                    status: 201,
                    message: "Profile created successfully",
                    data: data
                  };
                }
              }));

            case 4:
              _context2.prev = 4;
              _context2.t0 = _context2["catch"](0);
              throw _context2.t0;

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 4]]);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "getById", /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _consultant["default"].findById(id).then(function (data, err) {
                return {
                  status: 200,
                  data: data
                };
              });

            case 3:
              return _context3.abrupt("return", _context3.sent);

            case 6:
              _context3.prev = 6;
              _context3.t0 = _context3["catch"](0);
              throw _context3.t0;

            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 6]]);
    }));

    return function (_x2) {
      return _ref3.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "getByDivision", /*#__PURE__*/function () {
    var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(subcategory) {
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _consultant["default"].find({
                subcategory: subcategory
              }).then(function (data, err) {
                return {
                  status: 200,
                  data: data
                };
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

    return function (_x3) {
      return _ref4.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "update", /*#__PURE__*/function () {
    var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(payload) {
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return _consultant["default"].findByIdAndUpdate(payload.id, payload).then(function (data, err) {
                if (data) {
                  return {
                    status: 200,
                    message: "Record updated successfully"
                  };
                }
              });

            case 3:
              return _context5.abrupt("return", _context5.sent);

            case 6:
              _context5.prev = 6;
              _context5.t0 = _context5["catch"](0);
              throw _context5.t0;

            case 9:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 6]]);
    }));

    return function (_x4) {
      return _ref5.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "setUpload", /*#__PURE__*/function () {
    var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(id, payload) {
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return _consultant["default"].findByIdAndUpdate(id, payload).then(function (data, err) {
                if (data) {
                  /*
                  #swagger.responses[200] ={
                  description: 'Upload completed  successfully'
                  }
                  */
                  return {
                    status: 200,
                    message: "Upload completed successfully"
                  };
                }
              });

            case 3:
              return _context6.abrupt("return", _context6.sent);

            case 6:
              _context6.prev = 6;
              _context6.t0 = _context6["catch"](0);
              throw _context6.t0;

            case 9:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[0, 6]]);
    }));

    return function (_x5, _x6) {
      return _ref6.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "remove", /*#__PURE__*/function () {
    var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
      var id;
      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;

              /**
              * #swagger.tags = ['Consultant']
              * #swagger.description = Delete consultant"
              */
              id = req.params.id;
              _context7.next = 4;
              return _consultant["default"].findByIdAndDelete(id).then(function (dt, err) {
                if (dt) {
                  return {
                    status: 200,
                    message: "Consultant deleted successfully"
                  };
                }
              });

            case 4:
              _context7.next = 9;
              break;

            case 6:
              _context7.prev = 6;
              _context7.t0 = _context7["catch"](0);
              throw _context7.t0;

            case 9:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[0, 6]]);
    }));

    return function (_x7, _x8) {
      return _ref7.apply(this, arguments);
    };
  }());
});
var _default = ConsultantService;
exports["default"] = _default;