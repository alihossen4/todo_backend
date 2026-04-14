import mongoose from "mongoose";
import { MONGO_URI } from "../constants.js";
const dbConnect = async(req, res,next)=>{
    try {
        await mongoose.connect(MONGO_URI)
        console.log("Database connected")
    } catch (error) {
        console.log(error)
        // res.status(400).json({error: error.message})
    }
}
export default dbConnect;