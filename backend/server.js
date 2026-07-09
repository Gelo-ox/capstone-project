import express from 'express';
import {connect} from './database/db.js'
import cors from 'cors'
import userRouter from './routes/userRoute.js';
import authRouter from './routes/authRouter.js';
import dotenv from 'dotenv'
import departmentRouter from './routes/departmentRoute.js';

dotenv.config()

const app = express();
const PORT = process.env.PORT;

app.use(cors())
app.use(express.json())

app.use('/auth', authRouter)
app.use('/user', userRouter)
app.use('/department', departmentRouter)


app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`)
    await connect()
})