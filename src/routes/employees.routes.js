import {Router} from 'express';
import { getEmployees, createEmployee,updateEmployee,  daleteEmployee} from '../controllers/employees.controller.js';

const router = Router();


router.get('/employees', getEmployees)


router.post('/employees', createEmployee)


router.put('/employees', updateEmployee)


router.delete('/employees', daleteEmployee)


export default router;

