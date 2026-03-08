
const generateToken = async(userId)=>{ return jwt.sign({id:userId}, token, {expiresIn: "7d"})}

const registerUser = async(req, res)=>{
    
}
const loginUser = async(req, res)=>{
    
}
const getUserProfile = async(req, res)=>{
    
}
const updateUser = async(req, res)=>{
    
}
export {
    registerUser,
    loginUser,
    getUserProfile,
    updateUser
}