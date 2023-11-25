import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  nameProduct: {
    type: String,
    minlenght: 1,
    maxlenght: 50,
    unique: true,
    required: true,
  },
  type: {
    type: String,
    minlenght: 1,
    maxlenght: 50,
    unique: true,
    required: true,
  },
  price: {
    type: Number,
    minlenght: 1,
    maxlenght: 10,
    min: 0,
    max: 999999,
    required: true,
  },
  image: {
    type: String,
    minlenght: 1,
    maxlenght: 200,
    required: true,
  },
  category: {
    type: String,
    minlenght: 1,
    maxlenght: 50,
    required: true,
  },
  description: {
    type: String,
    minlenght: 1,
    maxlenght: 500,
    required: true,
  },
  stock: {
    type: Number,
    minlenght: 1,
    maxlenght: 10,
    min: 0,
    max: 999999,
    //required: true
  },
});

const Product = mongoose.model("product", productSchema);

export default Product;
