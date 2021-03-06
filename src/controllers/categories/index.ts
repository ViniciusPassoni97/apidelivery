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
        const listCategoryById = await orphanagesRepository.query(`SELECT * FROM categories WHERE categories.id = ${id}`);
        return response.json(listCategoryById);
    },
    async showByIdCategories(request:Request,response:Response){
        try {
            const orphanagesRepository = getRepository(CategoriesModel);
            const {id} = request.params;
            const list = await orphanagesRepository.query(`SELECT count(*) FROM itens where itens.category_id = ${id}`);
            return response.json(list);   
        } catch (error) {
            return response.json(error);
        }
    },
    async deleteByIdCategory(request:Request,response:Response){
        try {
            const orphanagesRepository = getRepository(CategoriesModel);
            const {id} = request.params;
            const data = await orphanagesRepository.delete(id);
            return response.json(data);
        } catch (error) {
            return response.json(error);
        }
    },
}