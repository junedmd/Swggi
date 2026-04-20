import Category from "../models/Categories.js";

// CREATE CATEGORY (upload image + save data)
export const createCategory = async (req, res) => {
  try {
    const { name, image } = req.body;

    // upload image to cloudinary

    const newCategory = new Category({
      name,image
    });

    await newCategory.save();

    res.status(201).json({
      success: true,
      data: newCategory
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// GET ALL CATEGORIES
export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();

    res.status(200).json({
      success: true,
      data: categories
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};