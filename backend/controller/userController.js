import db from '../database/db.js'
import bcrypt from 'bcrypt'

export const addUser = async (req, res) => {
    try {
        const {firstName, lastName, email, college, departmentId, username, password, roles} = req.body
        const roleString = JSON.stringify(roles)
    
        if(!firstName || !lastName || !email || !college || !departmentId || !username || !password || !roleString){
            const error = new Error("All fields are required");
            error.statusCode = 400;
            return error;
        } 

        const hashedPassword = await bcrypt.hash(password, 10);
        
        const sql = `
            INSERT INTO users
            (first_Name, last_Name, email, college_id, department_id, username, password, role)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `;

        db.query(sql, [firstName, lastName, email, college, departmentId, username, hashedPassword, roleString], (err, result) => {
            if(err){
                return res.status(500).json({
                    message: err.message
                })
            }

            res.status(201).json({
                message: "User added successfully!"
            })
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: error.message
        });
    }
    
}

export const getAllUsers = (req, res) => {
    const search = req.query.search || "";
    const role = req.query.role || "";

    // let sql = `SELECT * FROM users WHERE CONCAT(first_name, ' ', last_name) LIKE ?`;
    let sql = `
        SELECT
            u.id,
            u.first_name,
            u.last_name,
            u.college_id,
            u.email,
            d.department_name AS department,
            u.username,
            u.role
        FROM users u
        LEFT JOIN department d
            ON u.department_id = d.department_id
        WHERE CONCAT(u.first_name, ' ', u.last_name) LIKE ?
    `;
    const values = [`%${search}%`];

    if(role){
        sql += ` AND u.role LIKE ?`;
        values.push(`%${role}%`)
    }

    db.query(sql, values, (error, result) => {
        if(error){
            return res.status(500).json({
                message: error.message
            })
        }

        const users = result.map(user => ({
            ...user,
            role: JSON.parse(user.role)

        }))

        res.status(200).json({
            message: "Users fetched successfully",
            users
        })
    })
}

export const deleteUser = (req, res) => {
    const { id } = req.params

    const sql = "DELETE FROM users WHERE id = ?"

    db.query(sql, [id], (error, result) => {
        if(error){
            return res.status(500).json({
                message: error.message
            })
        }

        if(result.affectedRows == 0){
            return res.status(404).json({
                message: "User not found!"
            })
        }

        return res.status(200).json({
            message: "User deleted successfully"
        })
    })
}

export const editUser = (req, res) => {
    const {id} = req.params
    const {firstName, lastName, email, college, department, roles} = req.body

    const sql = "UPDATE users SET first_name=?, last_name=?, email=?, college_id=?, department_id=?, role=? WHERE id=?";

    db.query(sql, [firstName, lastName, email, college, department, JSON.stringify(roles), id], (error, result) => {
        if(error){
            return res.status(500).json({
                message: error.message
            })
        }

        if(result.affectedRows === 0){
            return res.status(404).json({
                message: "User not found"
            })
        }

        res.status(200).json({
            message: "User Updated Successfully!"
        })
    })
}