import express from "express";
export const router = express.Router();
import { body } from "express-validator";
import { registerUser } from "../controllers/user-controller.js";

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be atleast 3 characters long'),
    body('password').isLength({ min: 5 }).withMessage('Password must be atleast 5 characters long'),
], registerUser);