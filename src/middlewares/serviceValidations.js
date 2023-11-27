import { check } from "express-validator";
import validationsResults from "../helper/validationsResults";

const serviceValidations = [
  check("nameService")
    .notEmpty()
    .withMessage("Service name is required")
    .isLength({ min: 5, max: 50 })
    .withMessage("Service name must be between 5 to 50 characters"),

  check("nameTeacher")
    .notEmpty()
    .withMessage("Teacher name is required")
    .isLength({ min: 7, max: 50 })
    .withMessage("Teacher name must be between 7 to 50 characters"),

  check("date")
  .notEmpty().withMessage("Service date is required"),

  check("time")
  .notEmpty().withMessage("Service time is required"),

  check("image")
    .notEmpty()
    .withMessage("Service image is required")
    .isLength({ min: 1, max: 200 })
    .withMessage("Service image must be between 1 to 200 characters"),

  check("planType")
    .notEmpty()
    .withMessage("Service planeType is required")
    .isLength({ min: 4, max: 50 })
    .withMessage("Service planeType must be between 4 to 50 characters"),

  check("description")
    .notEmpty()
    .withMessage("Service description is required")
    .isLength({ min: 1, max: 500 })
    .withMessage("Service description must be between 1 to 500 characters"),

  check("price")
    .notEmpty()
    .withMessage("Service price is required")
    .isLength({ min: 1, max: 10 })
    .withMessage("Service price must be between 1 to 10 characters"),
  check("price").custom((value) => {
    if (value >= 0 && value <= 999999) {
      return true;
    } else {
      throw new Error("the price must be between 0 and 999999");
    }
  }),

  (req, res, next) => {
    validationsResults(req, res, next);
  },
];

export default serviceValidations;
