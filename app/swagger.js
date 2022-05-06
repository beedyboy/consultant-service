const swaggerAutogen = require("swagger-autogen")();
const outputFile = `${__dirname}/swagger.json`;
console.log({__dirname});
const doc = {
  info: {
    version: "1.0.0",
    title: "CONSULTATION SERVICE API",
    description: "API documentation for end users",
  },
  host: "https://paymax-consultant-service.herokuapp.com",
  basePath: "/",
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [ 
    {
      name: "Division",
      description: "Division",
    }, 
    {
      name: "Category",
      description: "Category Model",
    },
    {
      name: "Consultant",
      description: "Consultant Model",
    },
  ],
  securityDefinitions: {
    bearerAuth: {
      type: "http",
      scheme: "bearer",
      in: "header",
      name: "Authorization",
      bearerFormat: "JWT",
    },
  },
  definitions: { 
    Division: {
      $category: "624b591c970f62326dccf85e",
      $division: "Reporting", 
    },
    Category: {
      $name: "Financial",
    },
    Consultant: {
      $user:  "624c77a466cc249958c7f0b5", 
    officeName:   "Test Hospital" ,
    address:  "online local government area" ,
    country:"Nigeria",
    state: "Lagos",
    region:   "Ikeja" ,
    landmark: "Etiebet place",
    phone: "",
    specialization: ["Dental Care", "ENT"], 
    gender: "Male",
    language: "English",
    regNumber: "",
    officePic: "",
    skills: [],
    statement: ""
    }, 
  },
};
const endpointsFiles = [__dirname+"/routes/index.js"];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
