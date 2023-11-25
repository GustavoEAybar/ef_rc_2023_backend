import Product from "../models/product";

//PARA TODOS LOS PRODUCTOS
export const showProducts = async (req, res) => {
  try {
    const productList = await Product.find();
    res.status(200).json(productList);
  } catch {
    res.status(404).json({ message: "error loading products" });
  }
};

export const createProduct = async (req, res) => {
  const { nameProduct, type, price, image, category, description, stock } =
    req.body;

  try {
    const newProduct = new Product({
      nameProduct,
      type,
      price,
      image,
      category,
      description,
      stock,
    });

    await newProduct.save();
    res.status(201).json({ message: "Product created successfully" });
  } catch {
    res.status(404).json({ message: "Error creating product" });
  }
};

// PARA UN SOLO PRODUCTO
export const getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const oneProduct = await Product.findById(id);
    res.status(200).json(oneProduct);
  } catch {
    res.status(404).json({ message: "error when requesting product" });
  }
};
export const editProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndUpdate(id, req.body);
    res.status(200).json({ message: "edited product" });
  } catch {
    res.status(404).json({ message: "error when editing product" });
  }
};
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndUpdate(id, req.body);
    res.status(200).json({ message: "updated product" });
  } catch {
    res.status(404).json({ message: "error updating product" });
  }
};
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: "removed product" });
  } catch {
    res.status(404).json({ message: "error when deleting product" });
  }
};
