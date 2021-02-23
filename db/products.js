const { client } = require('./index');

const createProducts = async product => {
	// Field length validation
	if (Object.keys(product).length !== 7) {
		throw Error('Missing fields');
	}

	try {
		const { rows: newProduct } = await client.query(
			`insert into products( name, description, price, imageurl, "inStock", "useByDate", category) values($1, $2, $3, $4, $5, $6, $7) RETURNING *;`,
			Object.values(product)
		);
		return newProduct;
	} catch (error) {
		console.error(error);
		throw error;
	}
};

module.exports = { createProducts }