const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// /admin/add-user => GET
router.get('/add-user', (req, res, next) => {
  res.render('add-user', {
    pageTitle: 'Add Product',
    path: '/mainD/add-user',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
});

// /admin/add-user => POST
router.post('/add-user', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
