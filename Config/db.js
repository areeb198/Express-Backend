const { default: mongoose } = require("mongoose")

 async function ConnectDb(){
    try {
        await mongoose.connect(process.env.DBURI)
        console.log("Connected Successfully")
        
    } catch (error) {
        console.log("Connectionfailed",error)
        
    }

}
module.exports= ConnectDb
