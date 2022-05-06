"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _multer = require("../config/multer");

var _authorization = require("../Middleware/authorization");

var _consultant = _interopRequireDefault(require("../controllers/consultant"));

var router = _express["default"].Router();

var Consultant = new _consultant["default"]();

var upload = _multer.multerUploads.single("image");

router.get("/", Consultant.getAll);
router.get("/:id", Consultant.getById);
router.get("/", Consultant.getAll);
router.post("/", Consultant.create);
router.put("/", Consultant.update);
router.put("/pp", upload, Consultant.setUpload); // router.put("/pp", [upload, auth.hasAuthorization],  Consultant.setUpload);

router["delete"]("/:id", Consultant.remove);
var _default = router;
exports["default"] = _default;