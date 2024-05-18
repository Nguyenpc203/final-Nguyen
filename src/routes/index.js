const express = require('express');
const router = express.Router();
const path = require('path');
const ProductController = require('../controllers/product.controller');

router.use('/api/v1/product', require('./product'));

router.get('/', async (req, res) => {
    const indexView = path.join(__dirname, '../views/index.ejs');
    const products = await ProductController.getListProduct();
    res.render(indexView, { data: products });
})

router.get('/details/:_id', async (req, res) => {
    const id = req.params._id;
    // console.log(id);
    const indexView = path.join(__dirname, '../views/product-details.ejs');
    const products = await ProductController.getProduct(id);
    // console.log(products);
    res.render(indexView , {products});
})

router.get('/admin/add-products', async (req, res) => {
    const indexView = path.join(__dirname, '../views/admin/products.add.ejs');
    res.render(indexView);
})

router.get('/admin/update-products/:_id', async (req, res) => {
    const id = req.params._id;
    const indexView = path.join(__dirname, '../views/admin/products.update.ejs');
    const products = await ProductController.getProduct(id);
    res.render(indexView, {products});
})

router.get('/admin/list-product', async (req, res) => {
    const indexView = path.join(__dirname, '../views/admin/products.list.ejs');
    const products = await ProductController.getListProduct();
    res.render(indexView, { data: products });
})

module.exports = router;