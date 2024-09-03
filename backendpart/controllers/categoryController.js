<<<<<<< HEAD
const client = require('../db/db'); 

// Function to get all categories
const getAllCategories = async () => {
    try {
        const query = 'SELECT * FROM Categories';
        const result = await client.query(query);
        return result.rows;
    } catch (error) {
        console.error('Error fetching all categories:', error);
        throw error;
    }
=======
const { Client } = require('pg');
const client = require('../db/db');

// Function to get all categories
const getAllCategories = async () => {
    const query = 'SELECT * FROM Categories';
    const result = await client.query(query);
    return result.rows;
>>>>>>> 9ffa43d34d3611c686a7b4bd3eb3341704c221b3
};

// Function to get a category by ID
const getCategoryById = async (id) => {
<<<<<<< HEAD
    try {
        const query = 'SELECT * FROM Categories WHERE category_id = $1';
        const result = await client.query(query, [id]);
        return result.rows[0];
    } catch (error) {
        console.error(`Error fetching category with ID ${id}:`, error);
        throw error;
    }
=======
    const query = 'SELECT * FROM Categories WHERE category_id = $1';
    const result = await client.query(query, [id]);
    return result.rows[0];
>>>>>>> 9ffa43d34d3611c686a7b4bd3eb3341704c221b3
};

// Function to create a new category
const createCategory = async (category) => {
<<<<<<< HEAD
    try {
        const { category_name, description } = category;
        const query = `
            INSERT INTO Categories (category_name, description)
            VALUES ($1, $2) RETURNING *`;
        const result = await client.query(query, [category_name, description]);
        return result.rows[0];
    } catch (error) {
        console.error('Error creating new category:', error);
        throw error;
    }
=======
    const { category_name, description } = category;
    const query = `
        INSERT INTO Categories (category_name, description)
        VALUES ($1, $2) RETURNING *`;
    const result = await client.query(query, [category_name, description]);
    return result.rows[0];
>>>>>>> 9ffa43d34d3611c686a7b4bd3eb3341704c221b3
};

// Function to update an existing category
const updateCategory = async (id, category) => {
<<<<<<< HEAD
    try {
        const { category_name, description } = category;
        const query = `
            UPDATE Categories
            SET category_name = $1, description = $2
            WHERE category_id = $3 RETURNING *`;
        const result = await client.query(query, [category_name, description, id]);
        return result.rows[0];
    } catch (error) {
        console.error(`Error updating category with ID ${id}:`, error);
        throw error;
    }
=======
    const { category_name, description } = category;
    const query = `
        UPDATE Categories
        SET category_name = $1, description = $2
        WHERE category_id = $3 RETURNING *`;
    const result = await client.query(query, [category_name, description, id]);
    return result.rows[0];
>>>>>>> 9ffa43d34d3611c686a7b4bd3eb3341704c221b3
};

// Function to delete a category
const deleteCategory = async (id) => {
<<<<<<< HEAD
    try {
        const query = 'DELETE FROM Categories WHERE category_id = $1 RETURNING *';
        const result = await client.query(query, [id]);
        return result.rows[0];
    } catch (error) {
        console.error(`Error deleting category with ID ${id}:`, error);
        throw error;
    }
=======
    const query = 'DELETE FROM Categories WHERE category_id = $1 RETURNING *';
    const result = await client.query(query, [id]);
    return result.rows[0];
>>>>>>> 9ffa43d34d3611c686a7b4bd3eb3341704c221b3
};

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
<<<<<<< HEAD
};
=======
};
>>>>>>> 9ffa43d34d3611c686a7b4bd3eb3341704c221b3
