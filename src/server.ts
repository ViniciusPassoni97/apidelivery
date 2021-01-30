import express from 'express';

const app = express(); 

app.get('/',(req,res)=>{
    res.send('Ola mundo !');
})

app.listen(3333,()=>{
    console.log('Start ...');
});