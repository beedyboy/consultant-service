const path = require("path");
const multer = require("multer");
const Datauri = require("datauri/parser");

const storage = multer.memoryStorage();
const multerUploads = multer({ storage });

const dUri = new Datauri();
// this converts the buffer to data url
const dataUris = (req) =>
  dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer);

const dataUri = (file) =>
  dUri.format(path.extname(file.originalname).toString(), file.buffer);

module.exports = { multerUploads, dataUri };
