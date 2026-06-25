import { body } from "express-validator";
import { validaterRequest } from "../utils/utils.js";

const registerValidationRules = [
  body("email")
    .toLowerCase()
    .isEmail()
    .notEmpty()
    .withMessage("Email is required")
    .withMessage("Please provide a valid email address"),
  body("contact")
    .notEmpty()
    .withMessage("Contact  is required")
    .isMobilePhone("en-IN")
    .withMessage("Please provide a valid contact number"),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  validaterRequest,
];

export default registerValidationRules;
