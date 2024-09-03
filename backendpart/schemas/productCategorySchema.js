const client = require('../db/db');

const createProductCategoriesTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS productCategories (
            product_id INT NOT NULL,
            category_id INT NOT NULL,
            PRIMARY KEY (product_id, category_id),
            FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE CASCADE,
            FOREIGN KEY (category_id) REFERENCES categories(category_id) ON DELETE CASCADE
        )
    `;
    await client.query(query);
};

module.exports = createProductCategoriesTable;
