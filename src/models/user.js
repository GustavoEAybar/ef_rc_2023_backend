import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  nameUser: {
    type: String,
    maxlenght: 100,
    minlenght: 7,
    required: true,
  },
  lastNameUser: {
    type: String,
    maxlenght: 100,
    minlenght: 7,
    required: true,
  },
  email: {
    type: String,
    maxlenght: 100,
    minlenght: 12,
    unique: true,
    required: true,
  },
  phone: {
    type: Number,
    minlenght: 1,
    maxlenght: 10,
    min: 0,
    max: 999999,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  contractedPlan: {
    type: String,
    maxlenght: 100,
    minlenght: 7,
    required: true,
  },
  roll: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("user", userSchema);
export default User;
