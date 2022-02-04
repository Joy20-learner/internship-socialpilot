
const isnull=(ctx,next)=>{
    const email=ctx.request.body.email;
    if(email==undefined){
        return ctx.body={status:false,message:"email not found !"}
    }
    return next()

}

module.exports={isnull}
