const express = require('express');
const router = express.Router();
// ************ Require's ************
const {create,store,edit,update,destroy}=require("../controllers/admin")


/*** CREATE ONE PRODUCT ***/ 
router.get('/crear-productos',create); 
router.post('/crear-productos', store); 
 

/*** EDIT ONE PRODUCT ***/ 
router.get('/editar-productos/:id', edit); 
router.put('/editar-productos/:id', update); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/eliminar-productos/:id', destroy); 


module.exports = router;