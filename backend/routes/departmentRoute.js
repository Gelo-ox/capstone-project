import { Router } from "express";
import authorize from "../middleware/authMiddleware.js";
import {addDepartment, getDepartments} from '../controller/departmentController.js'

const departmentRouter = Router();

departmentRouter.post('/addDepartment', authorize, addDepartment)
departmentRouter.get('/', authorize, authorize, getDepartments)

export default departmentRouter