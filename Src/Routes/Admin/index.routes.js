const adminRoutes = require('express').Router();
const userRoutes = require('./admin.routes');
const productRoutes = require('./product.routes');
const cartRoutes = require('./cart.routes');


adminRoutes.use('/product', productRoutes);
adminRoutes.use('/admin', userRoutes);
adminRoutes.use('/cart', cartRoutes);
module.exports = adminRoutes; 