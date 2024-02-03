const mongoose = require('mongoose')

const connectionString=process.env.connectionString

mongoose.connect(connectionString).then(()=>{
    console.log("MongoDB conncted with PFServer");
}).catch((err)=>{
    console.log("Connection failed",err);
})