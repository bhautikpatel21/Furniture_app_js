const express = require('express');
const productRoute = express.Router();

const {
    getAllProducts,
    getProduct
} = require('../../Controller/User/product.controller');


productRoute.get('/get-Product', getProduct);

productRoute.get('/get-All-Product', getAllProducts);

module.exports = productRoute;