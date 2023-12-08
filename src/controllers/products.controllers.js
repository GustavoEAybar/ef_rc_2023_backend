import Product from "../models/product";
import { STATUS } from '../constants/index'

const showProducts = async (req, res) => {
  try {
    const productList = await Product.find();
    res.status(STATUS.OK).json(productList);
  } catch {
    res.status(STATUS.NOT_FOUND).json({ message: "error loading products" });
  }
};

const createProduct = async (req, res) => {
  const {
    nameProduct,
    image,
    category,
    type,
    size,
    weight,
    description,
    stock,
    price,
  } = req.body;

  try {
    const newProduct = new Product({
      nameProduct,
      image,
      category,
      type,
      size,
      weight,
      description,
      stock,
      price,
    });

    await newProduct.save();
    res.status(STATUS.CREATED).json({ message: "Product created successfully" });
  } catch {
    res.status(STATUS.NOT_FOUND).json({ message: "Error creating product" });
  }
};

const getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const oneProduct = await Product.findById(id);
    res.status(STATUS.OK).json(oneProduct);
  } catch {
    res.status(STATUS.NOT_FOUND).json({ message: "error when requesting product" });
  }
};

const editProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndUpdate(id, req.body);
    res.status(STATUS.OK).json({ message: "edited product" });
  } catch {
    res.status(STATUS.NOT_FOUND).json({ message: "error when editing product" });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndUpdate(id, req.body);
    res.status(STATUS.OK).json({ message: "updated product" });
  } catch {
    res.status(STATUS.NOT_FOUND).json({ message: "error updating product" });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.status(STATUS.OK).json({ message: "removed product" });
  } catch {
    res.status(STATUS.NOT_FOUND).json({ message: "error when deleting product" });
  }
};

export {
  showProducts,
  createProduct,
  getOne,
  editProduct,
  updateProduct,
  deleteProduct,
};
