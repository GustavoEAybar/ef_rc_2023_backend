import { Router } from "express";
import { login, register } from "../controllers/users.controllers";
import { loginValidate, userValidate } from "../middlewares/userValidations"

const users = Router();

users.route("/login").post([loginValidate], login);

users.route("/register").post([userValidate], register);

export default users;
