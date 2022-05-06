"use strict";

var jwt = require("jsonwebtoken");

var dotenv = require("dotenv");

dotenv.config();

var Authenticated = function Authenticated(req, res, next) {
  var authorization = req.headers.authorization;

  if (authorization) {
    var bearer = authorization.split(" ")[1];

    if (!bearer) {
      return res.status(403).json({
        error: "you must logged in"
      });
    }

    jwt.verify(token, process.env.SECRET_KEY, function (err, user) {
      if (err) {
        return res.status(403).json({
          error: "you must logged in"
        });
      }

      req.user = user;
      next();
    });
  } else {
    return res.status(403).json({
      error: "you must logged in"
    });
  }
};

exports.auth = {
  hasAuthorization: function hasAuthorization(req, res, next) {
    var authorization = req.headers.authorization;

    if (authorization) {
      var _token = authorization.split(" ")[1];
      jwt.verify(_token, process.env.SECRET_KEY, function (err, user) {
        if (err) {
          return res.status(403).json({
            error: "you must logged in"
          });
        }

        req.user = user;
        next();
      });
    } else {
      return res.status(403).json({
        error: "you must logged in"
      });
    }
  }
};
exports.captcha = {
  verify: function verify(req, res, next) {
    if (req.body.capcha === undefined || req.body.capcha === "" || req.body.capcha === null) {
      return res.status(401).json({
        msg: "Please select a capcha"
      });
    } //seceret key


    var secretKey = process.env.SECRET_KEY; //verified url

    var verifyUrl = "https://google.com/recapcha/api/siteverify?secret=".concat(secretKey, "&response=").concat(req.body.capcha, "&remoteip=").concat(req.connection.remoteAddress); //maker request to verifyUrl

    request(verifyUrl, function (err, response, body) {
      body = JSON.parse(body); //if not successful

      if (body.success !== undefined && !body.success) {
        return res.status(401).json({
          msg: "Failed capcha verification"
        });
      } //successful


      next();
    });
  }
};