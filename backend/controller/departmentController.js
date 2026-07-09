import db from "../database/db.js";

export const addDepartment = (req, res) => {
    try {
        const {departmentName, college, departmentHead} = req.body

        if(!departmentName.trim() || !college.trim() || !departmentHead.trim()){
            return res.status(400).json({
                message: "All fields are Required!"
            })
        }

        const sql = `INSERT INTO department (department_name, department_head_id, college_id) VALUES (?, ?, ?)`

        db.query(sql, [departmentName, departmentHead, college], (error, result) => {
            if(error){
                return res.status(500).json({
                    message: error.message
                })
            }

            res.status(200).json({
                message: "Department Added Successfully!",
                department: result
            })
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const getDepartments = (req, res) => {
    try {
        const sql = `SELECT department.*, users.first_name, users.last_name FROM department JOIN users
                    ON department.department_head_id = users.id;`;

        db.query(sql, (error, result) => {
            if(error){
                return res.status(500).json({
                    message: error.message
                })
            }

            res.status(200).json({
                message: "Department fetch Successfully",
                departments: result
            })
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}