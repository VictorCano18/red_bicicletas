var express = require('express');
var router = express.Router();
var bicicletaController = require('../controllers/bicicleta');

router.get('/', bicicletaController.bicleta_list);
router.get('/create', bicicletaController.bicleta_create_get);
router.post('/create', bicicletaController.bicleta_create_post);
router.get('/:id/update', bicicletaController.bicleta_update_get);
router.post('/:id/update', bicicletaController.bicleta_update_post);
router.post('/:id/delete', bicicletaController.bicleta_delete_post);



module.exports = router; 