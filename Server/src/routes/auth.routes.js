const express = require("express")
const router = express.Router()
const { Register, Login, getProfile, Logout } = require("../controllers/auth.controller")

router.post("/register", Register)
router.post("/login", Login)
router.get("/profile", getProfile)
router.post("/logout", Logout)


module.exports = router;
