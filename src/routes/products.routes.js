import { Router } from "express";
import {
  showProducts,
  getOne,
  createProduct,
  updateProduct,
  editProduct,
  deleteProduct,
} from "../controllers/products.controllers";
import productValidations from "../middlewares/productValidations";
import validateJWT from "../middlewares/validateJWT";

const products = Router();

products
  .route("/")
  .get(showProducts)
  .post([validateJWT, productValidations], createProduct);

products
  .route("/:id")
  .get(getOne)
  .put([validateJWT, productValidations], updateProduct)
  .patch([validateJWT, productValidations], editProduct)
  .delete(deleteProduct);

export default products;