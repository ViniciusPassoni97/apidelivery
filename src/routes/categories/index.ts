import express from 'express';

const route = express.Router();


route.get('/categories',(req,res)=>{
    res.json('Listando categorias');
});

route.get('/categories/:id',(req,res)=>{
    const data = req.params;
    res.json(data);
});

route.post('/categories',(req,res)=>{
    const data = req.body;
    res.json(data);
});


export default route;
