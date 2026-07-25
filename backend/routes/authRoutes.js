const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

/*
=====================================
TEST ROUTE
GET /api/auth
=====================================
*/

router.get("/", (req, res) => {
    res.send("Auth Route Berjalan");
});

/*
=====================================
REGISTER
POST /api/auth/register
=====================================
*/

router.post("/register", async (req, res) => {

    try {

        const { name, email, password } = req.body;

        // Cek email
        const existingUser = await User.findOne({ email });

        if (existingUser) {

            return res.status(400).json({
                message: "Email sudah digunakan"
            });

        }

        // Hash Password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Simpan User
        const user = new User({

            name,
            email,
            password: hashedPassword

        });

        await user.save();

        res.status(201).json({

            message: "Registrasi berhasil"

        });

    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

});

/*
=====================================
LOGIN
POST /api/auth/login
=====================================
*/

router.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {

            return res.status(400).json({

                message: "Email atau Password salah"

            });

        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {

            return res.status(400).json({

                message: "Email atau Password salah"

            });

        }

        const token = jwt.sign(

            {
                id: user._id,
                email: user.email
            },

            process.env.JWT_SECRET,

            {
                expiresIn: "1d"
            }

        );

        res.json({

            message: "Login berhasil",

            token,

            user: {

                id: user._id,
                name: user.name,
                email: user.email

            }

        });

    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

});

module.exports = router;