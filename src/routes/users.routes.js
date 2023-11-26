import { Router } from "express";
import { login, register } from "../controllers/users.controllers";
import { productValidate } from "../middlewares/userValidations";

const valid = Router();

valid.route("/login").post([productValidate], login);

valid.route("/register").post([productValidate], register);

export default valid;
