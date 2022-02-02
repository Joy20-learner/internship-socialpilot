const { removeAllListeners } = require('nodemon');
const {getCrud,getbyid,removeById,update,save} = require('../index2')

const createcrud = async({title,description})=>{
    const crud = {
        body,
        description
    }
    return await save(crud);
}


// const getProducts = async ()=>{
//     return await get();
// }

const getcrud = async id =>{
    return await getbyid(id)
}

const deletecrud = async id =>{
  return await removeById(id)
}

const updatecrud = async (id,{title,description})=>{
    return await update(id,{title,description})
}


module.exports = {
    createcrud,getcrud,deletecrud,updatecrud
}
