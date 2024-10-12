import express from "express";
import { fetchUserDetailsById, userLogin, userSignup } from "../controllers/User.js";


const userRouter = express.Router();

userRouter.post('/signup', userSignup);
userRouter.post('/login', userLogin);
userRouter.get('/:id', fetchUserDetailsById);

export default userRouter