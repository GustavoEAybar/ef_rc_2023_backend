import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  editProduct,
  getOne,
  showProducts,
  updateProduct,
} from "../controllers/products.controllers";
import { productValidate } from "../middlewares/productValidations";
import validateJWT from "../middlewares/validateJWT";

const router = Router();

router
  .route("/products")
  .get(showProducts)
  .post([validateJWT, productValidate], createProduct);

router
  .route("/products/:id")
  .get(getOne)
  .patch([validateJWT, productValidate], editProduct)
  .put([validateJWT, productValidate], updateProduct)
  .delete(deleteProduct);

export default router;
