const productsRouter = require('express').Router();
const { getAllProducts, createProducts } = require('../db/products'); 
productsRouter.get('/', async (req, res, next) => {
	try {
		const  products   = await getAllProducts();
		console.log('products:', products);
		res.send(products);
	} catch ({ name, message }) {
		next({ name, message });
	}
});

productsRouter.post('/', async (req, res, next) => {
	
	try {
		const user = await createProducts(req.body);
		res.send(
			user
		);
	} catch ({ name, message }) {
		res.send({ name, message });
	};
});

module.exports = { productsRouter };