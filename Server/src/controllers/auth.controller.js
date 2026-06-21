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

const Login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            message: "All fields are required"
        })
    }

    try {

        const user = await userModel.findOne({
            email: email
        }).select("+password")

        if (!user) {
            return res.status(401).json({
                message: "Email or Password is INVALID"
            })
        }

        const isPasswordValid = await user.comparePassword(password)
        if (!isPasswordValid) {
            return res.status(401).json({
                message: "Email or Password is INVALID"
            })
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "15d" })
        res.cookie("token", token)

        res.status(200).json({
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            },
            token
        })



    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: err.message,
        })
    }

}

module.exports = { Register, Login }