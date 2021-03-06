import express from "express";
import DivisionController from "../controllers/division";
const router = express.Router();
const division = new DivisionController();
router.get("/", division.getAll);  
router.get("/:id", division.getById); 
router.post("/", division.create); 
router.put("/", division.update); 
router.delete("/:id", division.remove);
export default router;