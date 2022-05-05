import express from "express";
import dbConnect from "./app/config/db";
import routes from "./app/routes";
const cors = require("cors");
require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const customCss = fs.readFileSync((process.cwd()+"/swagger.css"), 'utf8');
const app = express();
const { PORT, MONGO_URL } = process.env;
dbConnect(MONGO_URL);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, { explorer: true, customCss})
);
const origin = "*";
app.use(
  cors({
    allowedHeaders: [
      "Origin",
      " X-Requested-With",
      "Content-Type",
      "Accept",
      "Authorization",
      "X-Access-Token",
    ],
    exposedHeaders: ["sessionId"],
    origin: origin,
    methods: "OPTIONS,GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);
app.get("/", (req, res) => {
  res.send("<h2>Hi there!</h2>");
});
(async () => {
  try {
    app.listen(process.env.PORT, (err) => {
      if (err) {
        console.log("Server Connection Failed");
        throw err;
      }
      console.log(`Consultation Service running on  ${PORT}`);
    });
  } catch (err) {
    console.log("Consultation Service error");
    throw err;
  }
})();
