const koa = require('koa')
// const router= require('koa-router')
// const mongo= require('mongodb')
const parser = require('koa-bodyparser')
const crudroutes = require('./Router/route');
const bodyParser = require('koa-bodyparser');



const app= new koa();

app.use(bodyParser())

app.use(crudroutes.routes()).use(crudroutes.allowedMethods())

app.listen(3000,()=>{
    console.log("port is running")
})