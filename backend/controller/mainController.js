const asyncHandler = require("express-async-handler")
const { User } = require("../models")
const bcrypt = require("bcrypt")
const generateToken = require("../utils/generateToken")

module.exports = {
    register: asyncHandler(async (req, res) => {
        try {
            console.log("test");
            const { companyName, password, email } = req.body

            const salt = await bcrypt.genSaltSync(10);
            const hash = await bcrypt.hash(password, salt);

            const existingUser = await User.findOne({ where: { email } });
            if (existingUser) {
                throw new Error("User Already Exists")
            }

            const userData = await User.create({
                email: email,
                companyName: companyName,
                password: hash,
            })

            const token = await generateToken(userData.id)

            if (userData) {
                res.status(201).json({
                    email: userData.email,
                    companyName: userData.companyName,
                    token: token
                })
            }
        } catch (error) {
            console.log(error.message);
            res.status(401).json({ message: error.message })
        }
    }),

    authUser: asyncHandler(async (req, res) => {
        try {
            const { email, password } = req.body;
            const userData = await User.findOne({ where: { email } });
            const auth = await bcrypt.compare(password, userData.password);
            const token = generateToken(userData.id)
            if (auth) {
                res.status(201).json({
                    email: userData.email,
                    companyName: userData.companyName,
                    token: token
                })
            } else {
                throw new Error("Email or Password doesn't match")
            }
        } catch (error) {
            console.log(error);
            res.status(404).json({
                message: error.message
            })
        }
    })
}