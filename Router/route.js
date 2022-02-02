const Router = require('koa-router');
// const router = require('koa-router')

const {createcrud,getcrud,deletecrud,updatecrud} = require('../controller/api');
const { adddata, finddata } = require('../Database/query');
const { save } = require('../index2');
const { istitle } = require('../Validator/istitle');


const router = new Router({
    // prefix:'/crud'
})

router.get('/', async ctx =>{
    ctx.body = await getcrud();
})


router.post('/find',istitle,async ctx =>{
    return ctx.body={message:await finddata(ctx.request.body.title)}
    // let crud = ctx.request.body
    // crud = await createcrud(crud)
    // ctx.response.status= 200
    // ctx.body = crud
})


router.get('/:id', async ctx =>{
    const id = ctx.params.id
    await getcrud(id)
})

router.delete('/:id', async ctx =>{
    const id = ctx.params.id
    await deletecrud(id)
})

router.post("/save",async ctx=>{
    return ctx.body={message: await adddata(ctx.request.body.title,ctx.request.body.description)}
})

router.put('/:id', async ctx =>{
    const id = ctx.params.id;
    let crud = ctx.request.body
    ctx.response.status = 200;
    ctx.body = crud;
} )

module.exports = router