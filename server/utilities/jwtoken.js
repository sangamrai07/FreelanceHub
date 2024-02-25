const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.cookies.authToken;
    if (!token) return res.status(401).send("Access Denied.");

    jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
        if (err) return res.status(403).send("Invalid Token.");
        req.userId = payload.id;
        req.isSeller = payload.isSeller;
        next(); // Call next() to pass control to the next middleware or route handler
    });
};

module.exports = verifyToken;
