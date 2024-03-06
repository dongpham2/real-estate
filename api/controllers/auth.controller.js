import bcryptjs from "bcryptjs";
import User from "../model/user.modules.js";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hardPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    username,
    email,
    password: hardPassword,
  });
  try {
    await newUser.save();
    res.status(201).json("User created successfully!");
  } catch (error) {
    next(error);
  }
};
