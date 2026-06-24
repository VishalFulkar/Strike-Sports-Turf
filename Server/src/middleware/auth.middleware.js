const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

async function authRole(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized : No token provided"
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await userModel.findById(decoded.userId);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        if (user.role !== "admin") {
            return res.status(403).json({
                message: "You don't have access to this resource"
            });
        }

        req.user = user;
        next();
    }
    catch (err) {
        console.error("Detailed Error : ", err);
        return res.status(500).json({
            message: "Internal Server Error!",
            error: err.message
        });
    }
}

module.exports = { authRole };