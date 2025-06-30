const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({msg: "Acceso denegado, token no proporcionado"});
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = verified.id;
        next();
        
    } catch (error) {
        res.status(401).json({msg: "Token no valido"});
    }
}