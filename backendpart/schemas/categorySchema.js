const client = require('../db/db');

const createCategoryTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS Categories (
            category_id SERIAL PRIMARY KEY,
            category_name VARCHAR(255) NOT NULL,
            description TEXT
        )
    `;
    await client.query(query);
};

module.exports = createCategoryTable;