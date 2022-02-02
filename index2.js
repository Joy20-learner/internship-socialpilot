const crud = require('./Database/db')
// const crud = require('/index').db('store').collection('crud')
const ObjectId = require('mongodb').ObjectId;

const save = ({title,description}) => {
    const result = crud.insertOne({title,description})
    // return result.toArray();
}
const getCrud = () =>{
const cursor = crud.find();
return cursor.toArray();
}


const getbyid = (id) =>{
    return crud.findone({_id:ObjectId(id)})
}


const update = (id,{title,description})=>{
    const result = crud.replaceOne({_id:ObjectId(id)})
}

const removeById = id =>{
    crud.deleteOne({_id:ObjectId(id)})
}

module.exports= {getCrud,getbyid,removeById,update,save}