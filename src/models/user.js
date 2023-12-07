import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  image:{
    type: String,
    minlenght: 1,
    maxlenght: 200,
    required: true,
  },

  nameUser: {
    type: String,
    minlenght: 3,
    maxlenght: 50,
    required: true,
  },

  lastNameUser: {
    type: String,
    minlenght: 3,
    maxlenght: 50,
    required: true,
  },

  email: {
    type: String,
    minlenght: 12,
    maxlenght: 100,
    unique: true,
    required: true,
  },

  phone: {
    type: Number,
    minlenght: 7,
    maxlenght: 20,
    required: true,
  },

  password: {
    type: String,
    minlenght: 8,
    required: true,
  },

  classes:{
    type: [String],
    minlenght: 4,
    required: true,
  },

  contractedPlan: {
    type: String,
    minlenght: 4,
    maxlenght: 100,
    required: true,
  },

  roll: {
    type: String,
    minlenght: 7,
    maxlenght: 20,
    required: true,
  },
});

const User = mongoose.model("user", userSchema);
export default User;
