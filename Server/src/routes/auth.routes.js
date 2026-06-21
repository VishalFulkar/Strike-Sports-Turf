const express = require("express")
const router = express.Router()
const { Register } = require("../controllers/auth.controller")

router.post("/register",Register)




module.exports = router;
