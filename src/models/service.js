import mongoose, { Schema } from "mongoose";

const serviceSchema = new Schema({
  nameService: {
    type: String,
    minlenght: 5,
    maxlenght: 50,
    required: true,
  },

  nameTeacher: {
    type: String,
    minlenght: 7,
    maxlenght: 50,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now(),
    required: true,
  },

  time: {
    type: Date,
    default: Date.now(),
    required: true,
  },

  image: {
    type: String,
    minlenght: 1,
    maxlenght: 200,
    required: true,
  },

  planType: {
    type: String,
    minlenght: 4,
    maxlenght: 50,
    required: true,
  },

  description: {
    type: String,
    minlenght: 1,
    maxlenght: 500,
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
});

const Service = mongoose.model("service", serviceSchema);
export default Service;
