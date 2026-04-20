import express from "express";
const router=express.Router();
import { createCategory ,getCategories} from "../controllers/CategorieController.js";

router.post("/", createCategory); // Add a new Vehicle
router.get("/", getCategories);

export default router;