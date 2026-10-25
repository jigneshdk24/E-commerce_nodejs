import {
  createCategory,
  getAllCategories,
  getCategoryById,
  bulkCreateCategory,
} from "../services/Category.services.js";

export const createCategoryController = async (req, res, next) => {
  try {
    const category = await createCategory(req.body);

    res.status(201).json({
      success: true,
      message: "Category created successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const getAllCategoriesController = async (req, res, next) => {
  try {
    const category = await getAllCategories();

    res.status(200).json({
      success: true,
      data: category,
    });
  } catch (error) {
    next(error);
  }
};

export const createCategoryInBulk = async (req, res, next) => {
  try {
    const categories = req.body;

    if (!Array.isArray(categories) || categories.length === 0)
      return res.status(400).json({
        success: false,
        message: "request body must be an non-empty array",
      });

    const createdCategories = await bulkCreateCategory(categories);

    return res.status(201).json({
      success: true,
      data: createdCategories,
      length: createCategory.length,
      message: "Categories created successfully",
    });
  } catch (error) {}
};

export const getCategoryByIdController = async (req, res, next) => {
  try {
    const category = await getCategoryById(req.params.id);

    if (!category)
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });

    return res.status(200).json({
      success: true,
      data: category,
    });
  } catch (error) {
    next(error);
  }
};
