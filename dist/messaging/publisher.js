"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.publisher = void 0;

var _callback_api = _interopRequireDefault(require("amqplib/callback_api"));

var RABBIT_URI = process.env.RABBIT_URI;
var rabbitConn = null;
var publisherChannel = null;

var publisher = function publisher() {
  _callback_api["default"].connect(RABBIT_URI, function (err, connection) {
    if (err) {
      return setTimeout(publisher(), 3000);
    }

    connection.on("error", function (err) {
      if (err.message !== "Connection closing") {
        console.error("[conn] error", err.message);
      }
    });
    connection.on("close", function () {
      console.log("Connection closed.");
    });
    rabbitConn = connection;
    connected();
  });
};

exports.publisher = publisher;

var connected = function connected() {
  rabbitConn.createChannel(function (channelErr, channel) {
    if (channelErr) {
      throw channelErr;
    }

    publisherChannel = channel;
  });
};

var publish = function publish(exchange, routingKey, content) {
  try {
    publisherChannel.publish(exchange, routingKey, Buffer.from(content), {
      persistent: true
    }, function (err, msg) {
      if (err) {
        console.error("Publish error", err.message);
        publisherChannel.connection.close();
      }

      console.log("[x] sent %s", content);
    });
  } catch (error) {
    console.error("Publisher error");
  }
};