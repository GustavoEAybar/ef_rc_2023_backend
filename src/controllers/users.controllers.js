import User from "../models/user";
import bcrypt from "bcryptjs";
import generateJWT from "../helper/generateJWT";
import { STATUS } from '../constants/index'

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
      res
        .status(STATUS.NOT_FOUND)
        .json({ message: "User email or password incorrect - email" });
    const correctPassword = bcrypt.compareSync(password, user.password);
    if (!correctPassword)
      res
        .status(STATUS.NOT_FOUND)
        .json({ message: "User email or password incorrect - password" });
    const token = await generateJWT(user._id, user.nameUser);
    res.status(STATUS.OK).json({
      message: "User email and password correct",
      userName: user.nameUser,
      uid: user._id,
      token,
    });
  } catch {
    res.status(STATUS.BAD_REQUEST).json({ message: "User login in failed" });
  }
};

const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFound = await User.findOne({ email });
    if (userFound) res.status(STATUS.BAD_REQUEST).json({ message: "User already exists" });

    let createUser = new User(req.body);
    await createUser.save();
    const SALT_ROUND = 10;
    createUser.password = await bcrypt.hash(password, SALT_ROUND);

    const token = await generateJWT(createUser._id, createUser.nameUser);
    await createUser.save();
    res.status(STATUS.OK).json({
      message: "User created",
      userName: createUser.nameUser,
      uid: createUser._id,
      token,
    });
  } catch {
    res.status(STATUS.NOT_FOUND).json({ message: "User registration failed" });
  }
};

const showUsers = async (req, res) => {
  try {
    const userList = await User.find();
    res.status(STATUS.OK).json(userList);
  } catch {
    res.status(STATUS.NOT_FOUND).json({ message: "error loading User" });
  }
};

const getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const oneUser = await User.findById(id);
    res.status(STATUS.OK).json(oneUser);
  } catch {
    res.status(STATUS.NOT_FOUND).json({ message: "error when requesting service" });
  }
};

const editUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.findByIdAndUpdate(id, req.body);
    res.status(STATUS.OK).json({ message: "edit User"});
  } catch {
    res.status(STATUS.NOT_FOUND).json({ message: "errro when editing user"});    
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.findByIdAndUpdate(id, req.body);
    res.status(STATUS.OK).json({ message: "User updated"});
  } catch {
    res.status(STATUS.NOT_FOUND).json({ message: "error updating user" });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.findOneAndDelete(id);
    res.status(STATUS.OK).json({ message: 'removes User'});
  } catch {
    res.status(STATUS.NOT_FOUND).json({ message: 'error when deleting User'});
  }
};

export {
  showUsers,
  register,
  login,
  getOne,
  editUser,
  updateUser,
  deleteUser
 };
