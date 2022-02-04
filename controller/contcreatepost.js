const { create } = require("../Database/query")

const createpostcontroller=async(ctx)=>{
  const title = ctx.request.body.title || "Hello"
    const description= ctx.request.body.description ||"i am working at social pilot"
  
    const d = await create(title,description)
    console.log(d)
    return ctx.body={
        success:true,
        message:"Post created"
    }
}
module.exports={createpostcontroller}