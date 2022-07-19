const express= require('express');
const bodyParser=require('body-parser')


const app=express();

const routeMiddleWare = (req,res,next)=>{
    next();
}
app.get('/',routeMiddleWare,(req,res)=>{
    return res.json({hi: "hello world"})
})

app.listen('8000',()=>{
    console.log('server is running in port 8000');
})