import {Router} from 'express';
import categoriesRouter from './categories/index';
import itemCategories from './itemCategories/index';

const route = Router();


route.use(itemCategories);
route.use(categoriesRouter);
route.get('/',(req,res)=>{
    res.send('Index');
});

export default route;