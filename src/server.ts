import express from 'express';
import route from './routes/index';

const app = express(); 

app.use(route);

app.listen(3333,()=>{
    console.log('Start ...');
});