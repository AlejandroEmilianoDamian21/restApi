import {Router} from 'express';

const router = Router();


router.get('/employees', (req,res)=>{
    res.send(`Obteninedo empleados`)
})


router.post('/employees', (req,res)=>{
    res.send(`Creando empleados`)
})


router.put('/employees', (req,res)=>{
    res.send(`Actualizando de empleados`)
})


router.delete('/employees', (req,res)=>{
    res.send(`Eliminacion de empleados`)
})


export default router;

