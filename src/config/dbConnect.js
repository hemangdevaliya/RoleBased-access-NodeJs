const mongoose=require('mongoose')

const dbConnect=async()=>{
    try{

        const connect = await mongoose.connect(process.env.MONGODB_URI)
        console.log('db connected..',connect.connection.host,connect.connection.name)
    }
    catch(err){
        console.log('error ',err)
        process.exit(1)
    }
}
module.exports=dbConnect;