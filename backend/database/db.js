import mysql from 'mysql'

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "spms",
    password: ""
})


export const connect = () => {
    db.connect((err) => {
        if(err){
            console.log(err)
        }
        console.log("Connected!!")
    })
}

export default db