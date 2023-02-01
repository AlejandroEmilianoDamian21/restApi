import { pool } from '../db.js';

export const getEmployees = (req, res) => {
    res.send(`Obteninedo empleados`);
}

export const createEmployee = async (req, res) => {
    const {name, salary} = req.body;
    const [rows] = await pool.query('INSERT INTO employee  (name, salary) VALUES (?,?)', [name, salary])
    console.log(req.body);
    res.send({
        id: rows.insertId,
        name,
        salary
    })
}

export const updateEmployee =  (req, res) => {
    res.send(`Actualizando empleados`);
}

export const daleteEmployee = (req ,res) => {
    res.send(`Eliminando empleado`);
}