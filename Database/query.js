const mongoClient = require("./db");

const signin=(username,email,password)=> mongoClient.db("store").collection("crud").insertOne({username,email,password})

 const login=(email,password)=>mongoClient.db("store").collection("crud").findOne({email:email,password:password})

 const create=(title,description)=> mongoClient.db("store").collection("crud").insertOne({title:title,description:description})


// const addemail=(email)=> mongoClient.db("store").collection("crud").insertOne(email)

// const addpasswprd=(password)=> mongoClient.db("store").collection("crud").insertOne(password)

// const adddata=(title,description)=>mongoClient.db("store").collection("crud").insertOne({title:title,description:description})

const finddata =(title)=> mongoClient.db("store").collection("crud").findOne({title:title})

const updatedata = (title,description) => mongoClient.db("store").collection("crud").updateOne({title:"Task 01"},{$set:{title:title,description:description}})

// module.exports={adddata,finddata,updatedata,adduser,addemail}
module.exports={finddata,updatedata,signin,login,create}