import { check } from "express-validator";
import validationsResults from "../helper/validationsResults";

const loginValidate = [
  check("email")
    .notEmpty()
    .withMessage("Email is required")
    .isLength({ min: 12, max: 100 })
    .withMessage("Email must be between 12 to 100 characters"),

  check("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("Password must have at least 8 characters"),

  (req, res, next) => {
    validationsResults(req, res, next);
  },
];

const userValidate = [
  check("nameUser")
    .notEmpty()
    .withMessage("User name is required")
    .isLength({ min: 3, max: 50 })
    .withMessage("User name must be between 3 to 50 characters"),

  check("lastNameUser")
    .notEmpty()
    .withMessage("User name is required")
    .isLength({ min: 3, max: 50 })
    .withMessage("User name must be between 3 to 50 characters"),

  check("email")
    .notEmpty()
    .withMessage("Email is required")
    .isLength({ min: 12, max: 100 })
    .withMessage("Email must be between 12 to 100 characters"),

  check("phone")
    .notEmpty()
    .withMessage("Phone number is required")
    .isLength({ min: 7, max: 20 })
    .withMessage("Phone number must be between 7 to 20 characters"),

  check("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("Password must have at least 8 characters"),

  // check("contractedPlan")
  //   .notEmpty()
  //   .withMessage("The plan contracted is required")
  //   .isLength({ min: 4, max: 100 })
  //   .withMessage("The plan contracted must be between 4 to 100 characters"),

  check("roll")
    .notEmpty()
    .withMessage("Roll is required")
    .isLength({ min: 7, max: 20 })
    .withMessage("Roll must be between 7 to 20 characters"),

  (req, res, next) => {
    validationsResults(req, res, next);
  },
];

export { userValidate, loginValidate };
