const db = require('../db/db');

const getAllProductCategories = async () => {
    try {
        const query = 'SELECT * FROM productCategories';
        const result = await db.query(query);
        return result.rows;
    } catch (error) {
        console.error('Error fetching all product-category associations:', error);
        throw error;
    }
};

const getProductCategoryById = async (product_id, category_id) => {
    try {
        const query = 'SELECT * FROM productCategories WHERE product_id = $1 AND category_id = $2';
        const result = await db.query(query, [product_id, category_id]);
        return result.rows[0];
    } catch (error) {
        console.error(`Error fetching product-category association with product_id ${product_id} and category_id ${category_id}:`, error);
        throw error;
    }
};

const createProductCategory = async (productCategory) => {
    try {
        const { product_id, category_id } = productCategory;
        const query = 'INSERT INTO productCategories (product_id, category_id) VALUES ($1, $2) RETURNING *';
        const result = await db.query(query, [product_id, category_id]);
        return result.rows[0];
    } catch (error) {
        console.error('Error creating new product-category association:', error);
        throw error;
    }
};

const updateProductCategory = async (product_id, category_id, updatedCategory) => {
    try {
        const { new_product_id, new_category_id } = updatedCategory;
        const query = 'UPDATE productCategories SET product_id = $1, category_id = $2 WHERE product_id = $3 AND category_id = $4 RETURNING *';
        const result = await db.query(query, [new_product_id, new_category_id, product_id, category_id]);
        return result.rows[0];
    } catch (error) {
        console.error(`Error updating product-category association with product_id ${product_id} and category_id ${category_id}:`, error);
        throw error;
    }
};

const deleteProductCategory = async (product_id, category_id) => {
    try {
        const query = 'DELETE FROM productCategories WHERE product_id = $1 AND category_id = $2 RETURNING *';
        const result = await db.query(query, [product_id, category_id]);
        return result.rows[0];
    } catch (error) {
        console.error(`Error deleting product-category association with product_id ${product_id} and category_id ${category_id}:`, error);
        throw error;
    }
};

module.exports = {
    getAllProductCategories,
    getProductCategoryById,
    createProductCategory,
    updateProductCategory,
    deleteProductCategory
};


