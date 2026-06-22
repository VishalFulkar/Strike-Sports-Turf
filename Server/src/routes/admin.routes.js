const express = require("express")
const router = express.Router();
const multer = require("multer");
const authMiddleware = require("../middleware/auth.middleware")

const upload = multer({
    storage: multer.memoryStorage()
});

router.post("/upload-image",authMiddleware.authRole, upload.single("music"))