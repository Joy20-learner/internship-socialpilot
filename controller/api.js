// const { removeAllListeners } = require('nodemon');
// const {getCrud,getbyid,removeById,update,save} = require('../index2')

const { login } = require('../Database/query')
const {generatetoken}= require('../helper/token')
// const createcrud = async({title,description})=>{
//     const crud = {
//         body,
//         description
//     }
//     return await save(crud);
// }


// // const getProducts = async ()=>{
// //     return await get();
// // }

// const getcrud = async id =>{
//     return await getbyid(id)
// }

// const deletecrud = async id =>{
//   return await removeById(id)
// }

// const updatecrud = async (id,{title,description})=>{
//     return await update(id,{title,description})
// }


// module.exports = {
//     createcrud,getcrud,deletecrud,updatecrud
// }
const logincontroller=async(ctx)=>{
  const d=  await login("j1@gmail.com ","1")

const token = generatetoken({email: d.email})   
console.log(token) 

}

module.exports={logincontroller}