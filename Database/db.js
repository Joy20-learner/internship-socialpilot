// const {MongoClient} = require('mongodb');

// const client = new MongoClient("mongodb+srv://joy_social:joysocial123@cluster0.btlbi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

// client.connect(err => {
//     if(err){
//         console.log("error")
//     }
//     else{
//         console.log("Db running")
//     }
// })

// module.exports = client;


const { MongoClient } = require("mongodb");

const url =
   "mongodb+srv://joy_social:joysocial123@cluster0.btlbi.mongodb.net/test";

const client = MongoClient;
let mongoClient = new MongoClient(url,{});

// mongoClient = new MongoClient(url,{});
mongoClient
  .connect()
  .then(() => console.log("DB connected successfully"))
  .catch((e) => console.log("error" + e));
// const mongoDB=mongoClient
module.exports=mongoClient;