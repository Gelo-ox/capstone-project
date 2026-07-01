import express from 'express';
import {connect, createDb} from './database/db.js'

const app = express();
const PORT = 3000;

connect()
createDb()

app.get('/', (req, res) => {
    res.send('Hello, Express');
})

app.get('/user/:username', (req, res) => {
    const username = req.params.username
    res.send(`Welcome ${username}`)
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})