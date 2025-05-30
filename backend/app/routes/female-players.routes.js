const express = require('express');
const femalePlayersController = require('../controllers/female-players.controllers.js');
const router = express.Router();

// Obtener todas las jugadoras
router.get('/', femalePlayersController.findAll);

module.exports = router;
