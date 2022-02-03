const isupdate=(ctx,next)=>{
    const title=ctx.request.body.title;
    if(title==undefined){
        return ctx.body={status:false,message:"title not found !"}
    }
    return next()

}

module.exports={isupdate}