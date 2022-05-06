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

var _consultant = _interopRequireDefault(require("../services/consultant"));

var _helper = _interopRequireDefault(require("../util/helper"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var ConsultantController = /*#__PURE__*/(0, _createClass2["default"])(function ConsultantController() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, ConsultantController);
  (0, _defineProperty2["default"])(this, "service", new _consultant["default"]());
  (0, _defineProperty2["default"])(this, "getAll", /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var result;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.service.getAll();

            case 2:
              result = _context.sent;
              res.json(result);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "getById", /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var result;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this.service.getById(req.params.id);

            case 2:
              result = _context2.sent;
              res.json(result);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "getByDivision", /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
      var result;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this.service.getByDivision(req.params.id);

            case 2:
              result = _context3.sent;
              res.json(result);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "create", /*#__PURE__*/function () {
    var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
      var result;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _this.service.create(req.body);

            case 3:
              result = _context4.sent;
              return _context4.abrupt("return", res.status(result.status).json(_objectSpread({}, result)));

            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4["catch"](0);
              next(_context4.t0);

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 7]]);
    }));

    return function (_x7, _x8, _x9) {
      return _ref4.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "update", /*#__PURE__*/function () {
    var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
      var result;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return _this.service.update(req.body);

            case 3:
              result = _context5.sent;
              return _context5.abrupt("return", res.status(result.status).json(_objectSpread({}, result)));

            case 7:
              _context5.prev = 7;
              _context5.t0 = _context5["catch"](0);
              next(_context5.t0);

            case 10:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 7]]);
    }));

    return function (_x10, _x11, _x12) {
      return _ref5.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "setUpload", /*#__PURE__*/function () {
    var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res, next) {
      var image, body, images, payload, result;
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              image = req.file;
              body = req.body;
              images = "";
              _context6.next = 6;
              return _helper["default"].uploader(image).then(function (newPath) {
                images = newPath.url;
              });

            case 6:
              payload = {};
              payload[body["type"]] = images;
              console.log({
                payload: payload
              });
              _context6.next = 11;
              return _this.service.setUpload(body.id, payload);

            case 11:
              result = _context6.sent;
              return _context6.abrupt("return", res.status(result.status).json(_objectSpread({}, result)));

            case 15:
              _context6.prev = 15;
              _context6.t0 = _context6["catch"](0);
              next(_context6.t0);

            case 18:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[0, 15]]);
    }));

    return function (_x13, _x14, _x15) {
      return _ref6.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "remove", /*#__PURE__*/function () {
    var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res, next) {
      var result;
      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return _this.service.remove(req.params.id);

            case 3:
              result = _context7.sent;
              return _context7.abrupt("return", res.status(result.status).json(_objectSpread({}, result)));

            case 7:
              _context7.prev = 7;
              _context7.t0 = _context7["catch"](0);
              next(_context7.t0);

            case 10:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[0, 7]]);
    }));

    return function (_x16, _x17, _x18) {
      return _ref7.apply(this, arguments);
    };
  }());
});
var _default = ConsultantController;
exports["default"] = _default;