"use strict";

const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const Authenticated = (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization) {
    const bearer = authorization.split(" ")[1];
    if(!bearer) {
      return res.status(403).json({ error: "you must logged in" });
    }
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(403).json({ error: "you must logged in" });
      }
      req.user = user;
      next();
    });
  } else {
    return res.status(403).json({ error: "you must logged in" });
  }
};

exports.auth = {
  hasAuthorization: function (req, res, next) { 
      const { authorization } = req.headers;
      if (authorization) {
        const token = authorization.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
          if (err) {
            return res.status(403).json({ error: "you must logged in" });
          }
          req.user = user;
          next();
        });
      } else {
        return res.status(403).json({ error: "you must logged in" });
      }
  },
};

exports.captcha = {
  verify: function (req, res, next) {
    if (
      req.body.capcha === undefined ||
      req.body.capcha === "" ||
      req.body.capcha === null
    ) {
      return res.status(401).json({ msg: "Please select a capcha" });
    }
    //seceret key
    const secretKey = process.env.SECRET_KEY;
    //verified url
    const verifyUrl = `https://google.com/recapcha/api/siteverify?secret=${secretKey}&response=${req.body.capcha}&remoteip=${req.connection.remoteAddress}`;

    //maker request to verifyUrl
    request(verifyUrl, (err, response, body) => {
      body = JSON.parse(body);

      //if not successful
      if (body.success !== undefined && !body.success) {
        return res.status(401).json({ msg: "Failed capcha verification" });
      }
      //successful
      next();
    });
  },
};
