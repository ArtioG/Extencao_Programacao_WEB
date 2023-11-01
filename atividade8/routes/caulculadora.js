const express = require('express');
const router = express.Router();
const calculadoraController = require('../controllers.js/calculadoraController');

router.post('/', calculadoraController.calcular);

module.exports = router;
