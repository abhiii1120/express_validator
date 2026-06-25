import {body,validationResult} from 'express-validator';

const registerValidationRules = [
    body("email").toLowerCase().isEmail().withMessage("Please provide a valid email address"),
    body("contact").isMobilePhone("en-IN").withMessage("Please provide a valid contact number"),
    body('password').isLength({min:6}).withMessage("Password must be at least 6 characters long"),
]