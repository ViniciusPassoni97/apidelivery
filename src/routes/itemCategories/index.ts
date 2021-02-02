import express from 'express';
import itemController from '../../controllers/item/index';

const route = express.Router();

route.get('/itemCategories',itemController.show);
route.get('/itemCategories/:id',itemController.showById);
route.post('/itemCategories',itemController.index);


export default route;