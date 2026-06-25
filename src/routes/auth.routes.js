import { Router } from "express";
import * as authController from '../controllers/auth.controller.js'
import registerValidationRules from "../validation/auth.validation.js";
let authRouter  = Router();



/**
 * @routes POST /api/auth/register
 * @desc Register a new user
 * @argument {req.body.email} - user's email
 * @argument {req.body.contact} - user's contact number
 * @argument {req.body.password} - user's password
 * @access Public
 */
authRouter.post('/register',registerValidationRules,authController.registerUser);

export default authRouter;