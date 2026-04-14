import express from "express"
import dbConnect from "./src/db/index.js"
import { CLIENT_URI, PORT } from "./src/constants.js"
import cors from 'cors';
import authRoutes from "./src/routes/auth.route.js";
const app = express()
app.use(
    cors({
        origin: CLIENT_URI,
        methods: ["GET", "POST","PUT","DELETE"],
        allowedHeaders: ["Content-Type","Authorization"]
    })
)
app.use(express.json())
// const serverStart = async(req,res) =>{
//     try {
//         await dbConnect()
//         console.log("database connected");
        
//     } catch (error) {
//         console.log(error)
//         // res.status(401).json({error: error.message})
//     }
// }
dbConnect()
app.use("api/auth",authRoutes);
app.listen(PORT, (req, res)=>{
    console.log("backend server")
})