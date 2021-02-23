const apiRouter = require('express').Router();

const { productsRouter } = require('./products');

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

module.exports = { apiRouter } ;
