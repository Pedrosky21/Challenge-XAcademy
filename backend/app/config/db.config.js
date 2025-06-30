const { Sequelize } = require('sequelize');
require('dotenv').config();

const FemalePlayersModel = require('../models/female-players.models');
const MalePlayersModel = require('../models/male-players.models');
const UsersModel = require('../models/user.models');

// Inicia BBDD jugadores
const sequelizeMale = new Sequelize(process.env.DB_NAME_MALE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306,
    logging: false,
})

// Inicia BBDD jugadoras
const sequelizeFemale = new Sequelize(process.env.DB_NAME_FEMALE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306,
    logging: false,
})

// Inicia BBDD users
const sequelizeUsers = new Sequelize(process.env.DB_NAME_USERS, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306,
    logging: false
})

const FemalePlayers = FemalePlayersModel(sequelizeFemale);
const MalePlayers = MalePlayersModel(sequelizeMale);
const Users = UsersModel(sequelizeUsers);

const db = {sequelizeMale, sequelizeFemale, FemalePlayers, MalePlayers, Users};
module.exports = db;
