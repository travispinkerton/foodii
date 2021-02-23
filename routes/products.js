const productsRouter = require('express').Router();


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