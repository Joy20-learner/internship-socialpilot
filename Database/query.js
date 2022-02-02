const mongoClient = require("./db");

const adddata=(title,description)=>mongoClient.db("store").collection("crud").insertOne({title:title,description:description})

const finddata =(title)=> mongoClient.db("store").collection("crud").findOne({title:title})

module.exports={adddata,finddata}