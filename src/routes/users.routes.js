import { Router } from "express";
import {
  login,
  register,
  showUsers,
  getOne,
  deleteUser,
  updateUser,
  editUser,
} from "../controllers/users.controllers";
import {
  loginValidate,
  userValidate
} from "../middlewares/userValidations";
import validateJWT from "../middlewares/validateJWT";

const users = Router();

users
.route("/").get(showUsers);

users
.route("/login")
.post([loginValidate], login)


users
.route("/register/")
.post([userValidate], register);

users
  .route("/:id")
  .get(getOne)
  .put([validateJWT, userValidate], updateUser)
  .patch([userValidate, ], editUser)
  .delete([validateJWT], deleteUser);

  

export default users;
