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

const router = Router();

router
  .route("/products")
  .get(showProducts)
  .post([productValidate],createProduct);

router
  .route("/products/:id")
  .get(getOne)
  .patch([productValidate], editProduct)
  .put([productValidate], updateProduct)
  .delete(deleteProduct);

export default router;
