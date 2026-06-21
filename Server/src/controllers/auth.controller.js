const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")

const Register = async (req, res) => {
    
    const { name, email, phone, password } = req.body;

    if (!name || !email || !phone || !password) {
        return res.status(400).json({
            message: "All fields are required"
        })
    }

    try {
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.status(400).json({ message: "User already exists" })
        }
        const user = await userModel.create({
            name,
            email,
            phone,
            password
        })

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "15d" })

        await userModel.findByIdAndUpdate(user._id, { token })

        res.cookie("cookie", token)

        return res.status(201).json({
            message: "User registered successfully",
            user
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

}

module.exports = { Register }