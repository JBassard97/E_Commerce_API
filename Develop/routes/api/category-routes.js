const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // TODO: find all categories ✅
  // TODO: be sure to include its associated Products ✅
  try {
    // Find all categories with associated Products
    const categories = await Category.findAll({
      include: [{ model: Product }],
    });

    // Send the categories as a JSON response
    res.status(200).json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  // TODO: find one category by its `id` value ✅
  // TODO: be sure to include its associated Products ✅
  const categoryId = req.params.id;

  try {
    // Find one category by its ID with associated Products
    const category = await Category.findByPk(categoryId, {
      include: [{ model: Product }],
    });

    // If the category doesn't exist, return a 404 response
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    // Send the category as a JSON response
    res.status(200).json(category);
  } catch (error) {
    console.error("Error fetching category:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/", async (req, res) => {
  // TODO: create a new category ✅
  try {
    // Create a new category
    const newCategory = await Category.create(req.body);

    /* req.body should look like this...
    {
      category_name: "New Category",
    }
  */

    // Send the new category as a JSON response
    res.status(201).json(newCategory);
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(400).json({ error: "Bad Request" });
  }
});

router.put("/:id", async (req, res) => {
  // TODO: update a category by its `id` value ✅
  const categoryId = req.params.id;

  /* req.body should look like this...
    {
      category_name: "Updated Category Name",
    }
  */

  try {
    // Update a category by its ID value
    const [updatedRows] = await Category.update(req.body, {
      where: { id: categoryId },
    });

    // If no rows were updated, the category does not exist
    if (updatedRows === 0) {
      return res.status(404).json({ error: "Category not found" });
    }

    // Send a success message
    res.status(200).json({ message: "Category updated successfully" });
  } catch (error) {
    console.error("Error updating category:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  // TODO: delete a category by its `id` value ✅
  const categoryId = req.params.id;

  try {
    // Delete a category by its ID value
    const deletedRows = await Category.destroy({
      where: { id: categoryId },
    });

    // If no rows were deleted, the category does not exist
    if (deletedRows === 0) {
      return res.status(404).json({ error: "Category not found" });
    }

    // Send a success message
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    console.error("Error deleting category:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
