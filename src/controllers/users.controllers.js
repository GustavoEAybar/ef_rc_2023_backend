import User from "../models/user";
import bcrypt from "bcryptjs";
import generateJWT from "../helper/generateJWT";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
      res
        .status(404)
        .json({ message: "User email or password incorrect - email" });
    const correctPassword = bcrypt.compareSync(password, user.password);
    if (!correctPassword)
      res
        .status(404)
        .json({ message: "User email or password incorrect - password" });
    const token = await generateJWT(user._id, user.nameUser);
    res.status(200).json({
      message: "User email and password correct",
      userName: user.nameUser,
      uid: user._id,
      token,
    });
  } catch {
    res.status(400).json({ message: "User login in failed" });
  }
};

const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFound = await User.findOne({ email });
    if (userFound) res.status(400).json({ message: "User already exists" });

    let createUser = new User(req.body);
    await createUser.save();
    const SALT_ROUND = 10;
    createUser.password = await bcrypt.hash(password, SALT_ROUND);

    const token = await generateJWT(createUser._id, createUser.nameUser);
    await createUser.save();
    res.status(200).json({
      message: "User created",
      userName: createUser.nameUser,
      uid: createUser._id,
      token,
    });
  } catch {
    res.status(404).json({ message: "User registration failed" });
  }
};

export { login, register };
