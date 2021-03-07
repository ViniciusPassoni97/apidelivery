import express from 'express';
import CategoriesController from '../../controllers/categories/index';

const route = express.Router();

route.get('/categories', CategoriesController.show);
route.get('/categories/:id', CategoriesController.showById);
route.post('/categories', CategoriesController.index);
route.get('/itemCategories/categories/:id',CategoriesController.showByIdCategories);

export default route;