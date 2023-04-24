const express= require("express")
const { register, authUser } = require("../controller/mainController")

const router= express.Router()

router.post("/register", register)
router.post("/login", authUser)

module.exports= router