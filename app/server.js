import express from "express";
import dbConnect from "./config/db";
import fs from "fs";
import routes from "./routes";
const cors = require("cors");
require("dotenv").config(); 
import  swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json"; 
// const customCss = fs.readFileSync(process.cwd() + "./swagger.css", "utf8");
const app = express();
const { PORT, MONGO_URL } = process.env;
dbConnect(MONGO_URL);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, { explorer: true })
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
app.use('https://consultantation-service.herokuapp.com/consultantationmgt',routes);
app.get("/", (req, res) => {
  res.send("<h2>Hi there!</h2>");
});
(async () => {
  try {
    await app.listen(process.env.PORT, (err) => {
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
