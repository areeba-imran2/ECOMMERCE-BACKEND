const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404).json({ message: error.message }); // Send response to the client
};

module.exports = notFound;
