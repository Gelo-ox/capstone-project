import mysql from 'mysql'

const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "spms",
    password: ""
})


export const connect = () => {
    database.connect((err) => {
        if(err){
            console.log(err)
        }
        console.log("Connected!!")
    })
}

export default connect