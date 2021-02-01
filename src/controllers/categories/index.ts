import {Response,Request} from 'express'
import { getRepository } from 'typeorm';
import CategoriesModel from '../../models/Categories';

export default {
    async index(request:Request,response:Response){
        try {
            const {
                id,
                description,
                image
            } = request.body;
    
           const categoriesRepository = getRepository(CategoriesModel);
    
           const categories = categoriesRepository.create({
                description,
                image
            });
    
            await categoriesRepository.save(categories);
    
            return response.json(categories);  
    
        } catch (error) {
            return response.json(error);
        }
    },
    async show(request:Request,response:Response){
        const orphanagesRepository = getRepository(CategoriesModel);
        const list = await orphanagesRepository.find();
        return response.json(list);
    },
    async showById(request:Request,response:Response){
        const orphanagesRepository = getRepository(CategoriesModel);
        const {id} = request.params;
        const list = await orphanagesRepository.findOneOrFail(id);
        return response.json(list);
    }
}