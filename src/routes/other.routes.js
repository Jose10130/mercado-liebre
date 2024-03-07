// ************ Require's ************
const express = require('express');
const homeController = require('../controllers/other/home.controller');
const searchController = require('../controllers/other/search.controller');
const router = express.Router();

// ************ Controller Require ************

// raiz 
router.get('/', homeController); 
router.get('/buscar', searchController); 

module.exports = router;

