const express = require('express');
const cors = require('cors');

// Leer archivo de configuración
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}));

const db = require('./app/config/db.config.js');

const malePlayersRoutes = require('./app/routes/male-players.routes.js');
const femalePlayersRoutes = require('./app/routes/female-players.routes.js');
const authRoutes = require('./app/routes/auth.routes.js');

// Configuracion de rutas
app.use('/api/malePlayers', malePlayersRoutes);
app.use('/api/femalePlayers', femalePlayersRoutes);
app.use('/api/auth', authRoutes);

// Inicio del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

module.exports = app;
