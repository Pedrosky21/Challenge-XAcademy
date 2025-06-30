const db = require('../config/db.config.js');
const User = db.Users;

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Registro
exports.register = async (req, res) => {
  try {
    const { userName, password } = req.body;

    const existingUser = await User.findOne({ where: { userName } });
    if (existingUser) {
      return res.status(409).json({ msg: 'El nombre de usuario ya existe' });
    }

    if (!password) {
      return res.status(400).json({ msg: 'La contraseña es requerida' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ userName, password: hashedPassword });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.cookie('token', token, {
      httpOnly: true,
      secure: false,
      sameSite: 'Strict',
      maxAge: 3600000,
    });

    res.status(201).json({
      message: 'Usuario creado exitosamente',
      user: {
        userName: user.userName,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error en el servidor', error });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { userName, password } = req.body;

    const user = await User.findOne({ where: { userName } });
    if (!user) {
      return res.status(401).json({ msg: 'Usuario inexistente' });
    }

    const isCorrect = await bcrypt.compare(password, user.password);
    if (!isCorrect) {
      return res.status(401).json({ msg: 'Contraseña incorrecta' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.cookie('token', token, {
      httpOnly: true,
      secure: false,
      sameSite: 'Strict',
      maxAge: 3600000,
    });

    res.status(200).json({
      message: 'Login exitoso',
      user: {
        userName: user.userName,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error en el servidor', error });
  }
};
