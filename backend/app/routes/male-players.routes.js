const express = require('express');
const malePlayersController = require('../controllers/male-players.controllers.js');
const router = express.Router();

// Obtener todos los jugadores masculinos
router.get('/', malePlayersController.findAll);
// Obtener un jugador masculino por ID
router.get('/:id', malePlayersController.findByPk);

module.exports = router;
