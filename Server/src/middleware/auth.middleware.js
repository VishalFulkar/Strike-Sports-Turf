const jwt = require("jsonwebtoken")

async function authRole(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized : No token provided"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET).select("+role")

        if (decoded.role != "admin") {
            return res.status(403).json({
                message: "You don't have access to create an album"
            })
        }

        req.user = decoded;
        next();
    }
    catch (err) {
        console.error("Detailed Error : ", err);
        return res.status(500).json({
            message: "Internal Server Error!",
            error: err.message
        })
    }
}

module.exports = authRole