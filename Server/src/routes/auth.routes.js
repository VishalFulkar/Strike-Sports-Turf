const express = require("express")
const router = express.Router()
const { Register, Login, getProfile } = require("../controllers/auth.controller")

router.post("/register",Register)
router.post("/login",Login)



module.exports = router;
