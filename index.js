import express from "express";
import dotenv from "dotenv";
import MongoDb from "./Mongodb.js"
import routebook from "./Router.js"
import cors from 'cors'
dotenv.config()

const app= express()
app.use(express.json())
MongoDb() 
app.use('/books',routebook)

app.use(cors())

app.listen(process.env.PORT,()=>{

    console.log(`Port is running in ${process.env.PORT}` )
})