import express from 'express';

const route = express.Router();


route.get('/categories',(req,res)=>{
    res.send('Listando categorias');
});

route.get('/categories/:id',(req,res)=>{
    const data = req.params;
    res.json(data);
});

route.post('/categories',(req,res)=>{
    const data = req.body;
    res.send(data);
});


export default route;
