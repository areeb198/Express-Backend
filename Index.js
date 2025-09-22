const express = require("express");
const { Connection } = require("mongoose");
const ConnectDb = require("./Config/db");
const dotenv = require('dotenv')
dotenv.config()
const app = express()
const PORT=process.env.PORT||5000;
ConnectDb()



app.get("/" , (req,res)=> {
    res.send("Hello Express")
})




app.listen(PORT,()=>{
    console.log(`server is running on port:${PORT}`)
})
