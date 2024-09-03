const express = require('express');
const {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/productController');
const router = express.Router();

// Route to get all products
router.get('/', async (req, res) => {
    try {
        const products = await getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to get a product by ID
router.get('/:id', async (req, res) => {
    try {
        const product = await getProductById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to create a new product
router.post('/', async (req, res) => {
    try {
        const newProduct = await createProduct(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to update an existing product
router.put('/:id', async (req, res) => {
    try {
        const updatedProduct = await updateProduct(req.params.id, req.body);
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to delete a product
router.delete('/:id', async (req, res) => {
    try {
        const deletedProduct = await deleteProduct(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(deletedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;




