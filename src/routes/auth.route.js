import e from "express";


const router = e.Router()

router.post('/register', resigterUser)
router.post('/login', loginUser)
router.get('/profile',protect, getUserProfile)
router.put('/profiile',protect, updateUserProfile)