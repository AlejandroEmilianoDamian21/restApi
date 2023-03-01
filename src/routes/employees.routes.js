import {Router} from 'express';
import { getEmployees, createEmployee,updateEmployee,  daleteEmployee} from '../controllers/employees.controller.js';

const router = Router();

router.get("/employees", (req, res) => {
  res.send(`Obteninedo empleados`);
});

router.post("/employees", (req, res) => {
  res.send(`Creando empleados`);
});
router.get('/employees', getEmployees)

router.put("/employees", (req, res) => {
  res.send(`Actualizando de empleados`);
});

router.delete("/employees", (req, res) => {
  res.send(`Eliminacion de empleados`);
});
router.post('/employees', createEmployee)


router.put('/employees', updateEmployee)


router.delete('/employees', daleteEmployee)


export default router;
