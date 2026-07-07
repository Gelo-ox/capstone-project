import {Router} from 'express'
import { addUser, deleteUser, getAllUsers, editUser } from '../controller/userController.js'
import authorize from '../middleware/authMiddleware.js'

const userRouter = Router()

userRouter.get('/users',authorize, getAllUsers)
userRouter.post('/addUser',authorize, addUser)
userRouter.delete('/delete/:id', authorize, deleteUser)
userRouter.patch('/update/:id', authorize, editUser)

export default userRouter