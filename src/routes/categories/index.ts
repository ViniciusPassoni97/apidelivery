import express from 'express';
import {getRepository} from 'typeorm';
import CategoriesModel from '../../models/Categories';

const route = express.Router();


route.get('/categories',(req,res)=>{
    res.json('Listando categorias');
});

route.get('/categories/:id',(req,res)=>{
    const data = req.params;
    res.json(data);
});

route.post('/categories',async (req,res)=>{
    try {
        const {
            id,
            description,
            image
        } = req.body;

       const categoriesRepository = getRepository(CategoriesModel);

       const categories = categoriesRepository.create({
            description,
            image
        });

        await categoriesRepository.save(categories);

        return res.json(categories);  

    } catch (error) {
        return res.json(error);
    }
});


export default route;
