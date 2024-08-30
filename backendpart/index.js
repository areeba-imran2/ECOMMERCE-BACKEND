const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
const notFound = require('./middleware/notFound');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes'); // Import the product routes

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(logger); // Custom logger middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors({ origin: 'http://localhost:3000' })); // Ensure CORS is set correctly

// Route handlers
app.use('/auth', authRoutes); // Authentication routes
app.use('/products', productRoutes); // Product routes

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

// Middleware for handling 404 errors
app.use(notFound); // Middleware to handle 404 errors

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log error details
    res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

