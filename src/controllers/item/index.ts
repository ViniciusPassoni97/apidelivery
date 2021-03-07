import {Request,Response} from 'express';
import {getRepository} from 'typeorm';
import ModelItem from '../../models/Item';

export default{
    
    async showById(req:Request,res:Response){
        try {
            const item = getRepository(ModelItem);
            const {id} = req.params;
            const list = await item.findOneOrFail(id);
            return res.json(list);
        } catch (error) {
            return res.json(error);
        }
    },
    async show(req:Request,res:Response){
        try {
            const item = getRepository(ModelItem);
            const list = await item.find();
    
            return res.json(list);
        } catch (error) {
            return res.json(error);
        }
    },
    async index(req:Request,res:Response){
        try {
            const data = req.body;
            const itemRepository = getRepository(ModelItem);
            const dataSave =  itemRepository.create(data);
            console.log(dataSave);
            const item = await itemRepository.save(dataSave);
            console.log(item);

            return res.json(item);
        } catch (error) {
            return res.json(error);
        }   
    }
}