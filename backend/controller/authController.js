import db from "../database/db.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const login = async (req, res) => {
    const {username, password} = req.body

    if(!username || !password){
        res.status(400).json({
            message: "All fields are required!"
        })
    }

    const sql = "SELECT * FROM users where username = ?"

    db.query(sql, [username], async (error, result) => {
        if(error){
            res.status(500).json({
                message: err.message
            });
        }

        const user = result[0];

        if(!user){
            return res.status(401).json({
                message: "User doesn't exist!"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(401).json({
                message: "Invalid Password!"
            })
        }

        const token = jwt.sign(
            {
                id: user.id,
                username: user.username,
                role: user.role
            }, process.env.JWT_SECRET,
        )

        res.status(200).json({
            message: "Login Successful.",
            user,
            token
        })
    })
}