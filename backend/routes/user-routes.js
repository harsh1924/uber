import express from "express";
const router = express.Router();
import { body } from "express-validator";
import { registerUser, getUserProfile, loginUser, logoutUser } from "../controllers/user-controller.js";
import { authUser } from "../middlewares/auth-middleware.js";

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be atleast 3 characters long'),
    body('password').isLength({ min: 5 }).withMessage('Password must be atleast 5 characters long'),
], registerUser);

router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password should be atlest 6 characters long')
], loginUser);

router.get('/profile', authUser, getUserProfile)
router.get('/logout', authUser, logoutUser)

export default router;