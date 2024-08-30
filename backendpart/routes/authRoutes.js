const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const client = require('../db/db'); 
const { hashPassword, comparePassword } = require('../utils/hashing');
require('dotenv').config();

// Register new user
router.post('/signup', async (req, res) => {
    const { first_name, last_name, email, phone_number, address, password } = req.body;

    try {
        // Hash the password
        const hashedPassword = await hashPassword(password);

        // Insert new user
        const query = `
            INSERT INTO Users (first_name, last_name, email, phone_number, address, password)
            VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
        const result = await client.query(query, [first_name, last_name, email, phone_number, address, hashedPassword]);

        // Respond with created user
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
});

// Login user
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Query to find the user by email
        const query = 'SELECT * FROM Users WHERE email = $1';
        const result = await client.query(query, [email]);

        if (result.rows.length === 0) {
            return res.status(400).json({ message: 'User not found' });
        }

        const user = result.rows[0];

        // Compare provided password with hashed password
        const isMatch = await comparePassword(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { user_id: user.user_id },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRATION }
        );

        // Respond with token
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error: error.message });
    }
});

module.exports = router;
