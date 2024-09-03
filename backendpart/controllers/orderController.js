<<<<<<< HEAD
const client = require('../db/db');
=======
const client= require('../db/db');
>>>>>>> 9ffa43d34d3611c686a7b4bd3eb3341704c221b3

// Function to get all orders
const getAllOrders = async () => {
    try {
        const query = 'SELECT * FROM Orders';
        const result = await client.query(query);
        return result.rows;
    } catch (error) {
        console.error('Error fetching all orders:', error);
        throw error;
    }
};

// Function to get an order by ID
const getOrderById = async (id) => {
    try {
        const query = 'SELECT * FROM Orders WHERE order_id = $1';
        const result = await client.query(query, [id]);
        return result.rows[0];
    } catch (error) {
        console.error(`Error fetching order with ID ${id}:`, error);
        throw error;
    }
};

// Function to create a new order
const createOrder = async (order) => {
    try {
        const { total_amount, user_id } = order;
        const query = `
            INSERT INTO Orders (total_amount, user_id)
            VALUES ($1, $2) RETURNING *`;
        const result = await client.query(query, [total_amount, user_id]);
        return result.rows[0];
    } catch (error) {
        console.error('Error creating new order:', error);
        throw error;
    }
};

<<<<<<< HEAD
// Function to update an order
const updateOrder = async (id, order) => {
    try {
        const { total_amount, user_id } = order;
        const query = `
            UPDATE Orders
            SET total_amount = $1, user_id = $2
            WHERE order_id = $3 RETURNING *`;
        const result = await client.query(query, [total_amount, user_id, id]);
        return result.rows[0];
    } catch (error) {
        console.error(`Error updating order with ID ${id}:`, error);
        throw error;
    }
};

// Function to delete an order
const deleteOrder = async (id) => {
    try {
        const query = 'DELETE FROM Orders WHERE order_id = $1 RETURNING *';
        const result = await client.query(query, [id]);
        return result.rows[0];
    } catch (error) {
        console.error(`Error deleting order with ID ${id}:`, error);
        throw error;
    }
};

=======
>>>>>>> 9ffa43d34d3611c686a7b4bd3eb3341704c221b3
module.exports = {
    getAllOrders,
    getOrderById,
    createOrder,
<<<<<<< HEAD
    updateOrder,
    deleteOrder,
};
=======
};
>>>>>>> 9ffa43d34d3611c686a7b4bd3eb3341704c221b3
