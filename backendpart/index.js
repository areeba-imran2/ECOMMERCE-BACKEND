const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
const notFound = require('./middleware/notFound');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const productCategoryRoutes = require('./routes/productCategoryRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(logger);
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

// Route handlers
app.use('/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/categories', categoryRoutes); 
app.use('/product-categories', productCategoryRoutes); 

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

// Middleware for handling 404 errors
app.use(notFound);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
