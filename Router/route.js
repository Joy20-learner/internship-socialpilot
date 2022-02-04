const Router = require('koa-router');
// const router = require('koa-router')

const {createcrud,getcrud,deletecrud,updatecrud, logincontroller} = require('../controller/api');
const {  finddata, updatedata } = require('../Database/query');
const { save } = require('../index2');
const { istitle } = require('../Validator/istitle');
const { isupdate } = require('../Validator/update');
const {signin} = require('../Database/query');
const {login}= require('../Database/query');
const {isnull}= require('../Validator/isnull')
const {emailverify}= require('../Validator/emailverify');
const { isEmailindb } = require('../Validator/isemailindb');
const { verifytokens } = require('../controller/verifytoken');

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

router.post('/update',isupdate, async ctx =>{
    return ctx.body={message: await updatedata(ctx.request.body.title,ctx.request.body.description)}
})

// router.get('/:id', async ctx =>{
//     const id = ctx.params.id
//     await getcrud(id)
// })

router.delete('/:id', async ctx =>{
    const id = ctx.params.id
    await deletecrud(id)
})

router.post("/save",async ctx=>{
    return ctx.body={message: await adddata(ctx.request.body.title,ctx.request.body.description)}
})

router.post("/signin",async ctx=> {
    return ctx.body={message: await signin(ctx.request.body.username,ctx.request.body.email,ctx.request.body.password )}
})

router.post("/login",emailverify,isnull, logincontroller,async ctx=>{
    const data=ctx.request.body
    return ctx.body={message: await login(data.email,data.password)}
})

router.get('/verifytoken',verifytokens)

router.get("/createpost",verifytokens, async ctx=>{
    return ctx.body={message: await create(ctx.request.body.title,ctx.request.body.description)}
})

// router.put('/:id', async ctx =>{
//     const id = ctx.params.id;
//     let crud = ctx.request.body
//     ctx.response.status = 200;
//     ctx.body = crud;
// } )

module.exports = router