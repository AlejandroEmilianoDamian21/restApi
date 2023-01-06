import express from 'express'

const app = express();
const port = 3306;


app.get('/employes', (req,res)=>{
    res.send(`Obteninedo empleados`)
})


app.post('/employes', (req,res)=>{
    res.send(`Creando empleados`)
})


app.put('/employes', (req,res)=>{
    res.send(`Actualizando de empleados`)
})


app.delete('/employes', (req,res)=>{
    res.send(`Eliminacion de empleados`)
})



app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})