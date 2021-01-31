import express from 'express';
import route from './routes/index';
import './database/connection';

const app = express(); 

app.use(express.json());
app.use(route);

app.listen(3333,()=>{
    console.log('Start ...');
});