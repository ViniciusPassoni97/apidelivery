import express from 'express';
import itemController from '../../controllers/item/index';
import multer from 'multer';
import ConfigMulter from '../../config/uploads';

const route = express.Router();


const upload = multer(ConfigMulter);

route.get('/itemCategories',itemController.show);
route.get('/itemCategories/:id',itemController.showById);
route.post('/itemCategories',itemController.index);


export default route;