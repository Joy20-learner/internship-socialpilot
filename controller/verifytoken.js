// const { verify } = require("jsonwebtoken")
// const context = require("koa/lib/context")
const { verifytoken } = require("../helper/token")



const verifytokens =  (ctx) => {
return ctx.body={message:verifytoken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImoxQGdtYWlsLmNvbSAiLCJpYXQiOjE2NDM4OTI4NTcsImV4cCI6MTY0Mzk3OTI1N30.k_v336ovV_D_QVoPnut33utW8azHKk5QrvA4dIeJZ3w")}

}

module.exports={verifytokens}