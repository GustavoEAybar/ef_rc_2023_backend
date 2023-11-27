import { check } from "express-validator";
import validationsResults from "../helper/validationsResults";

const productValidations = [
  check("nameProduct")
    .notEmpty()
    .withMessage("Product name is required")
    .isLength({ min: 4, max: 100 })
    .withMessage("Product name must be between 4 to 100 characters"),

  check("image")
    .notEmpty()
    .withMessage("Product image is required")
    .isLength({ min: 1, max: 200 })
    .withMessage("Product image must be between 1 to 200 characters"),

  check("category")
    .notEmpty()
    .withMessage("Product category is required")
    .isLength({ min: 1, max: 50 })
    .withMessage("Product category must be between 1 to 50 characters"),

  check("type")
    .notEmpty()
    .withMessage("Product type is required")
    .isLength({ min: 1, max: 50 })
    .withMessage("Product type must be between 1 to 50 characters"),

  check("size")
    .notEmpty()
    .withMessage("Product size is required")
    .isLength({ min: 1, max: 50 })
    .withMessage("Product size must be between 1 to 50 characters"),

  check("weight")
    .notEmpty()
    .withMessage("Product weight is required")
    .isLength({ min: 2, max: 5 })
    .withMessage("Product weight must be between 2 to 5 characters"),
    check("weight").custom((value) => {
      if (value >= 0 && value <= 10000) {
        return true;
      } else {
        throw new Error("the stock must be between 0 and 10000");
      }
    }),

  check("description")
    .notEmpty()
    .withMessage("Product description is required")
    .isLength({ min: 1, max: 500 })
    .withMessage("Product description must be between 1 to 500 characters"),

  check("stock")
    .notEmpty()
    .withMessage("Product stock is required")
    .isLength({ min: 1, max: 3 })
    .withMessage("Product stock must be between 1 to 3 characters"),
  check("stock").custom((value) => {
    if (value >= 0 && value <= 999) {
      return true;
    } else {
      throw new Error("the stock must be between 0 and 999");
    }
  }),

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

  (req, res, next) => {
    validationsResults(req, res, next);
  },
];

export default productValidations;
