const express = require('express');
const router = express.Router();
const {
    getAllProductCategories,
    getProductCategoryById,
    createProductCategory,
    updateProductCategory,
    deleteProductCategory
} = require('../controllers/productCategoryController');

// Route to get all product categories
router.get('/', async (req, res) => {
    try {
        const categories = await getAllProductCategories();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to get a product category by ID
router.get('/:product_id/:category_id', async (req, res) => {
    try {
        const { product_id, category_id } = req.params;
        const category = await getProductCategoryById(product_id, category_id);
        if (!category) {
            return res.status(404).json({ message: 'Product category not found' });
        }
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to create a new product category
router.post('/', async (req, res) => {
    try {
        const newCategory = await createProductCategory(req.body);
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to update an existing product category
router.put('/', async (req, res) => {
    try {
        const { old_product_id, old_category_id, new_product_id, new_category_id } = req.body;
        const updatedCategory = await updateProductCategory(old_product_id, old_category_id, { new_product_id, new_category_id });
        if (!updatedCategory) {
            return res.status(404).json({ message: 'Product category not found' });
        }
        res.status(200).json(updatedCategory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to delete a product category
router.delete('/', async (req, res) => {
    try {
        const { product_id, category_id } = req.body;
        const deletedCategory = await deleteProductCategory(product_id, category_id);
        if (!deletedCategory) {
            return res.status(404).json({ message: 'Product category not found' });
        }
        res.status(200).json(deletedCategory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
