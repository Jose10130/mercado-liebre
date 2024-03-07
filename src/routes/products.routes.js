// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const { list } = require('../controllers/products');
const detailController = require('../controllers/products/detail.controller');



/*** GET ALL PRODUCTS ***/ 
router.get('/', list); 



/*** GET ONE PRODUCT ***/ 
router.get('/detalle/:id', detailController); 


module.exports = router;