import express from 'express'

const app = express();
const port = 3306;

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})