"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _db = _interopRequireDefault(require("./config/db"));

var _fs = _interopRequireDefault(require("fs"));

var _routes = _interopRequireDefault(require("./routes"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _swagger = _interopRequireDefault(require("./swagger.json"));

var cors = require("cors");

require("dotenv").config();

// const customCss = fs.readFileSync(process.cwd() + "./swagger.css", "utf8");
var app = (0, _express["default"])();
var _process$env = process.env,
    PORT = _process$env.PORT,
    MONGO_URL = _process$env.MONGO_URL;
(0, _db["default"])(MONGO_URL);
app.use("/api-docs", _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(_swagger["default"], {
  explorer: true
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
(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return app.listen(process.env.PORT, function (err) {
            if (err) {
              console.log("Server Connection Failed");
              throw err;
            }

            console.log("Consultation Service running on  ".concat(PORT));
          });

        case 3:
          _context.next = 9;
          break;

        case 5:
          _context.prev = 5;
          _context.t0 = _context["catch"](0);
          console.log("Consultation Service error");
          throw _context.t0;

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[0, 5]]);
}))();