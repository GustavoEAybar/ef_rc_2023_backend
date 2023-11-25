import { check } from "express-validator";
import { validationsResults } from "../helper/validationsResults";

export const productValidate = [
  check("nameProduct")
    .notEmpty()
    .withMessage("Product name is required")
    .isLength({ min: 1, max: 50 })
    .withMessage("Product name must be between 1 to 50 characters"),

  check("type", "Product type is required")
    .notEmpty()
    .withMessage()
    .isLength({ min: 1, max: 50 })
    .withMessage("Product type must be between 1 to 50 characters"),

  check("price")
    .notEmpty()
    .withMessage("Product price is required")
    .isLength({ min: 1, max: 10 })
    .withMessage("Product price must be between 1 to 10 characters"),
  check("price").custom((value) => {
    if (value >= 0 && value <= 999999) {
      return true;
    } else {
      throw new Error("the price must be between 0 and 999999");
    }
  }),

  check("image")
    .notEmpty()
    .withMessage("Product image is required")
    .isLength({ min: 1, max: 200 })
    .withMessage("Product image must be between 1 to 200 characters"),

  check("category")
    .notEmpty()
    .withMessage("Product category is required")
    .isLength({ min: 1, max: 500 })
    .withMessage("Product category must be between 1 to 500 characters"),

  check("description")
    .notEmpty()
    .withMessage("Product description is required")
    .isLength({ min: 1, max: 50 })
    .withMessage("Product description must be between 1 to 50 characters"),

  (req, res, next) => {
    validationsResults(req, res, next);
  },
];
