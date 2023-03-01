import { Router  } from "express";

const router = Router();
 
router.get('/client', (req,res) => {
    res.send('Obteniendo clientes');
});

router.post('/cliente' , (req, res) => {
    res.send('Creando clientes');
})

router.put('/client', (req, res) => {
    res.send(`ACtualizando clientes`);
})

router.delete('/client', (req, res) => {
    res.send('Borrando clientes')
})


export default router;