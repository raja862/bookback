import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()



const MongoDb=()=>{


    try{
const Db= mongoose.connect(process.env.MONGO)
console.log("Dp connected in databas")
return Db

    }
    catch(error){
console.log(error)
    }
}
export default MongoDb