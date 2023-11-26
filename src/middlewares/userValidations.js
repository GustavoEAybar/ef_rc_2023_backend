import { check } from "express-validator";
import { validationsResults } from "../helper/validationsResults";

const productValidate = [
  check("nameUser")
    .notEmpty()
    .withMessage("User name is required")
    .isLength({ min: 1, max: 50 })
    .withMessage("User name must be between 1 to 50 characters"),

  check("email", "User type is required")
    .notEmpty()
    .withMessage()
    .isLength({ min: 1, max: 50 })
    .withMessage("User type must be between 1 to 50 characters"),

  check("password").notEmpty().withMessage("User price is required"),

  (req, res, next) => {
    validationsResults(req, res, next);
  },
];

export default productValidate;
