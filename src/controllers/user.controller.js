import { User } from "../models/users.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoUserRepository from "../infrastructure/mongoUserRepository.js";

const userRepository = new mongoUserRepository();

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = userRepository.findByEmail(email);
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const token = jwt.sign({ userId: user._id }, "secretkey");
  res.json({ token });
};

export const getUsers = async (req, res) => {
  const users = userRepository.findAll();
  res.send({ result: "success", payload: users });
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = userRepository.findById(id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(user);
};

export const registerUser = async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  const user = userRepository.findByEmail(email);

  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }
  const encryptedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    first_name,
    last_name,
    email,
    password: encryptedPassword,
  });
  await userRepository.save(newUser).catch();
  res.send({
    result: "User created successfully",
    payload: {
      user_id: user._id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
    },
  });
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, password } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);

  const user = userRepository;
  try {
    const updateUser = new User({
      first_name,
      last_name,
      email,
      password: encryptedPassword,
    });

    user.update(id, updateUser);

    res.send({
      result: "User updated successfully",
      payload: {
        user_id: user._id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(404).json({ message: "User not found" });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = userRepository.delete(id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.send({ result: "User deleted successfully" });
};

export default {
  registerUser,
  loginUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
