import category from "./category";
import division from "./division";
import consultation from "./consultation";
import express from "express"; 
const routes = express.Router();
routes.use("/category", category);
routes.use("/division", division);
routes.use("/consultation", consultation);
export default routes;