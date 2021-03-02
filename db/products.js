const { client } = require('./index');

const getAllProducts = async () => {
	try {
		const  { rows : products }  = await client.query(`select * from products`);
		return products;
	} catch (error) {
		console.error(error);
		throw error;
	}
};

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

module.exports = { 
    createProducts,
    getAllProducts  }