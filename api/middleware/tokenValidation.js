const jwt = require("jsonwebtoken");
const {errorResponse} = require("../responses");

module.exports.validateToken = (req, res, next) => {
    try {
        const auth = req.headers.authorization;
        if (!auth) {
            throw new Error("Missing Authorization Header");
        }
        if (!auth.startsWith("Bearer")) {
            throw new Error("Malformed Authorization Header");
        }
        const authContent = req.headers.authorization.split("Bearer");
        if (authContent.length > 2) {
            throw new Error("Malformed Authorization Header");
        }
        const token = authContent[1].trim();
        jwt.verify(token, process.env.SECRET_KEY || "default-secret-key");
        return next()
    } catch (error) {
        return res.status(400).send({...errorResponse, status: 401, message: error.message});
    }
}