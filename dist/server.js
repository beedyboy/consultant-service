"use strict";

var _express = _interopRequireDefault(require("express"));

var _db = _interopRequireDefault(require("./app/config/db"));

var _routes = _interopRequireDefault(require("./app/routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var cors = require("cors");

require("dotenv").config();

var swaggerUi = require("swagger-ui-express");

var swaggerDocument = require("./swagger.json");

var customCss = fs.readFileSync(process.cwd() + "/swagger.css", 'utf8');
var app = (0, _express["default"])();
var _process$env = process.env,
    PORT = _process$env.PORT,
    MONGO_URL = _process$env.MONGO_URL;
(0, _db["default"])(MONGO_URL);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument, {
  explorer: true,
  customCss: customCss
}));
var origin = "*";
app.use(cors({
  allowedHeaders: ["Origin", " X-Requested-With", "Content-Type", "Accept", "Authorization", "X-Access-Token"],
  exposedHeaders: ["sessionId"],
  origin: origin,
  methods: "OPTIONS,GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 200
}));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_routes["default"]);
app.get("/", function (req, res) {
  res.send("<h2>Hi there!</h2>");
});

_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          app.listen(process.env.PORT, function (err) {
            if (err) {
              console.log("Server Connection Failed");
              throw err;
            }

            console.log("Consultation Service running on  ".concat(PORT));
          });
          _context.next = 8;
          break;

        case 4:
          _context.prev = 4;
          _context.t0 = _context["catch"](0);
          console.log("Consultation Service error");
          throw _context.t0;

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[0, 4]]);
}))();