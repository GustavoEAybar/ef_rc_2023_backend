import { Router } from 'express';
import { createProduct, deleteProduct, editProduct, getOne, showProducts, updateProduct } from '../controllers/products.controllers';

const router = Router();

router
.route('/products')
.get(showProducts)
.post(createProduct)

router
.route('/products/:id')
.get(getOne)
.patch(editProduct)
.put(updateProduct)
.delete(deleteProduct)

export default router;