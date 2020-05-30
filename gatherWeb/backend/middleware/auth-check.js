const jwt = require('jsonwebtoken');
const User = require('../models/user');


module.exports = async(req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, "secret_this_should_be_longer");
        const jwtPayload = jwt.decode(token);
        req.user = await User.findById(jwtPayload.userId);
        next()
    } catch(err) {
        res.status(401).json({message: "Auth Failed", error: err})
    }
}