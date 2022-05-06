"use strict";

var path = require("path");

var multer = require("multer");

var Datauri = require("datauri/parser");

var storage = multer.memoryStorage();
var multerUploads = multer({
  storage: storage
});
var dUri = new Datauri(); // this converts the buffer to data url

var dataUris = function dataUris(req) {
  return dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer);
};

var dataUri = function dataUri(file) {
  return dUri.format(path.extname(file.originalname).toString(), file.buffer);
};

module.exports = {
  multerUploads: multerUploads,
  dataUri: dataUri
};