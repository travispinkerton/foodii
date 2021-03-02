const apiRouter = require('express').Router();

const { productsRouter } = require('./products');
const { stripeRouter } = require('./stripe');
const { usersRouter } = require('./users');
const { orderProductsRouter } = require('./order_products');
const { ordersRouter } = require('./orders');

apiRouter.get("/", (req, res, next) => {
  res.send({
    message: "API is under construction!"
  });
});

apiRouter.get("/health", (req, res, next) => {
  res.send({
    message: "healthy!"
  })
})
apiRouter.use('/products', productsRouter);
apiRouter.use('/users', usersRouter);
apiRouter.use('/stripe', stripeRouter);
apiRouter.use('./orders', ordersRouter);
apiRouter.use('./order_products', orderProductsRouter);

module.exports =  apiRouter  ;
