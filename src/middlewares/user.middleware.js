import jwt from "jsonwebtoken"
import {JWT_SECRET} from "../constants.js"
import { User } from "../models/user.model.js";
const protect = async(req,res, next)=>{
    try {
        
        let token = req.headers.authorization;
        if(token && token.startsWith("Bearer")){
            token = token.split(" ")[1];
            const decoded = jwt.verify(token,JWT_SECRET);
            req.user = await User.findById(decoded.id).select("-password");
            next();
        } else{
            res.status(401).json({message: "Not authorized, no token"});
        }

    } catch (error) {
        res.status(401).json({message:"Token failed"})
    }
}
const adminOnly = () =>{

}
export {protect};