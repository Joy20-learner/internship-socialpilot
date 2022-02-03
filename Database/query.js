const mongoClient = require("./db");

const adddata=(title,description)=>mongoClient.db("store").collection("crud").insertOne({title:title,description:description})

const finddata =(title)=> mongoClient.db("store").collection("crud").findOne({title:title})

const updatedata = (title,description) => mongoClient.db("store").collection("crud").updateOne({title:"Task 01"},{$set:{title:title,description:description}})

module.exports={adddata,finddata,updatedata}