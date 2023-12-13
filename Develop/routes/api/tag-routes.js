const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

//The `/api/tags` endpoint

router.get("/", async (req, res) => {
  //TODO: find all tags ✅
  //TODO: be sure to include its associated Product data ✅
  try {
    // Find all tags with associated Product data
    const tags = await Tag.findAll({
      include: [{ model: Product, through: ProductTag, as: "products" }],
    });

    // Send the tags as a JSON response
    res.status(200).json(tags);
  } catch (error) {
    console.error("Error fetching tags:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  //TODO: find a single tag by its `id` ✅
  //TODO: be sure to include its associated Product data ✅
  const tagId = req.params.id;

  try {
    // Find a single tag by its ID with associated Product data
    const tag = await Tag.findByPk(tagId, {
      include: [{ model: Product, through: ProductTag, as: "products" }],
    });

    // If the tag doesn't exist, return a 404 response
    if (!tag) {
      return res.status(404).json({ error: "Tag not found" });
    }

    // Send the tag as a JSON response
    res.status(200).json(tag);
  } catch (error) {
    console.error("Error fetching tag:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/", async (req, res) => {
  //TODO: create a new tag ✅
  try {
    // Create a new tag

    /* req.body should look like this...
      {
        tag_name: "New Tag Name"
      }
     */

    const newTag = await Tag.create(req.body);

    // Send the new tag as a JSON response
    res.status(200).json(newTag);
  } catch (error) {
    console.error("Error creating tag:", error);
    res.status(400).json({ error: "Bad Request" });
  }
});

router.put("/:id", async (req, res) => {
  //TODO: update a tag's name by its `id` value ✅
  const tagId = req.params.id;

  try {
    // Update a tag's name by its ID value

    /* req.body should look like this...
      {
        tag_name: "Updated Tag Name"
      }
    */

    const [updatedRows] = await Tag.update(req.body, {
      where: { id: tagId },
    });

    // If no rows were updated, the tag does not exist
    if (updatedRows === 0) {
      return res.status(404).json({ error: "Tag not found" });
    }

    // Send a success message
    res.status(200).json({ message: "Tag updated successfully" });
  } catch (error) {
    console.error("Error updating tag:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  //TODO: delete on tag by its `id` value ✅
  const tagId = req.params.id;

  try {
    // Delete a tag by its ID value
    const deletedRows = await Tag.destroy({
      where: { id: tagId },
    });

    // If no rows were deleted, the tag does not exist
    if (deletedRows === 0) {
      return res.status(404).json({ error: "Tag not found" });
    }

    // Send a success message
    res.status(200).json({ message: "Tag deleted successfully" });
  } catch (error) {
    console.error("Error deleting tag:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
