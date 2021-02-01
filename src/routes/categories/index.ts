import express from 'express';
import {getRepository} from 'typeorm';
import CategoriesModel from '../../models/Categories';

const route = express.Router();


route.get('/categories', async (req,res)=>{
    const orphanagesRepository = getRepository(CategoriesModel);
    const list = await orphanagesRepository.find();

    return res.json(list);
});

route.get('/categories/:id', async (req,res)=>{
    const orphanagesRepository = getRepository(CategoriesModel);
    const {id} = req.params;
    const list = await orphanagesRepository.findOneOrFail(id);

    return res.json(list);
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
