import express from 'express';

const route = express.Router();


route.get('/itemCategories',(req,res)=>{
    res.send('Listando Itens');
});

route.get('/itemCategories/:id',(req,res)=>{
    const data = req.params;
    res.json(data);
});

route.post('/itemCategories',(req,res)=>{
    const data = req.body;
    res.send(data);
});


export default route;
