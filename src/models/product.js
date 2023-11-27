import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  nameProduct: {
    type: String,
    minlenght: 4,
    maxlenght: 100,
    unique: true,
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
  },

  type: {
    type: String,
    minlenght: 1,
    maxlenght: 50,  
  },
  
  size: {
    type: String,
    minlenght: 1,
    maxlenght: 50,
    
  },

  weight: {
    type: Number,
    minlenght: 2,
    maxlenght: 5,
    min: 0,
    max: 10000,
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
    maxlenght: 3,
    min: 0,
    max: 999,
  },

  price: {
    type: Number,
    minlenght: 1,
    maxlenght: 10,
    min: 0,
    max: 999999,
    required: true,
  }
});

const Product = mongoose.model("product", productSchema);

export default Product;
