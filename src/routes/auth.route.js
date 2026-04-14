import e from "express";
import { registerUser,loginUser, getUserProfile, updateUserProfile } from "../controllers/auth.controller.js";
import {protect} from "../middlewares/user.middleware.js";
const router = e.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/profile',protect, getUserProfile)
router.put('/profiile',protect, updateUserProfile)

export default router;