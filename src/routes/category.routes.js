import { Router } from "express";

import {
  createCategoryController,
  getAllCategoriesController,
  getCategoryByIdController,
  createCategoryInBulk,
} from "../controllers/category.controller.js";

const router = Router();

router.post("/", createCategoryController);

router.post("/bulk", createCategoryInBulk);
router.get("/", getAllCategoriesController);

router.get("/:id", getCategoryByIdController);

export default router;
