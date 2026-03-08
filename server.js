import express from "express"
import dbConnect from "./src/db/index.js"
import { PORT } from "./src/constants.js"

const app = express()

const serverStart = async(req,res) =>{
    try {
        dbConnect()
        console.log("database connected");
        
    } catch (error) {
        console.log(error)
        // res.status(401).json({error: error.message})
    }
}

serverStart()
app.listen(PORT, (req, res)=>{
    console.log("backend server")
})