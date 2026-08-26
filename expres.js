//server create on epxress
const express=require('express');
const app=express();

app.use((req,res,next)=>{
    console.log("Request url:",req.url,"Method:",req.method);
    next();
})

app.get('/',(req,res)=>{
    res.send("Hello i am from express");
});

const PORT=4000;

app.listen(PORT,()=>{
    console.log(`Server is runing on port:${PORT}`);
})

