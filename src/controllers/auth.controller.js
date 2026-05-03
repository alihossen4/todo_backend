import { User } from "../models/user.model.js"
import brcypt from "bcryptjs"
import { ADMIN_INVITE_TOKEN } from "../constants.js"
const generateToken = async(userId)=>{ return jwt.sign({id:userId}, token, {expiresIn: "7d"})}

const registerUser = async(req, res)=>{
    try{
    const {username, email, password, profileImage, admininviteToken} = req.body; 
    const emailExist = await User.findOne({email});
    if(emailExist){
        return res.status(400).json({message: "user email already exist"});
    }
    let role = "member";
    if(admininviteToken && admininviteToken===ADMIN_INVITE_TOKEN){
        role="admin"
    }
    const hashPassword = await brcypt.hash(password, 10);
    const user = User.create({
        username,
        email,
        password: hashPassword,
        role,
        profileImage
    })
    res.status(200).json({
        username:user.username,
        email: user.email,
        password: user.password,
        role: user.role,
        profileImage: user.profileImage
    })
    
    }
    catch(error){
       res.status(400).json({message:"server errir", error: error.message});
    }

}
const loginUser = async(req, res)=>{
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({message: "Invalid email or password"})
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(401).json({message: "Invalid email or password"});
        }
        res.json({
            _id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
            profileImage: user.profileImage,
            token: generateToken(user._id)
        });
    }
    catch{
        return res.status(403).json({message: "Invalid credentials"});
    }
}
const getUserProfile = async(req, res)=>{
    
}
const updateUserProfile = async(req, res)=>{
    
}
export {
    registerUser,
    loginUser,
    getUserProfile,
    updateUserProfile
}