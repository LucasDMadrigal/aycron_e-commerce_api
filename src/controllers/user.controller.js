import mongoUserRepository from "../infrastructure/mongoUserRepository.js";
import loginUserUseCase from "../core/useCases/loginUserUseCase.js";
import registerUserUseCase from "../core/useCases/registerUserUseCase.js";

const userRepository = new mongoUserRepository();

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const result = await loginUserUseCase({ email, password });

  res.status(result.statusCode).json(result.payload);
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

  const result = await registerUserUseCase({
    first_name,
    last_name,
    email,
    password,
  });

  res.status(result.statusCode).json(result.payload);
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email } = req.body;

  try {
    const updateUser = {
      first_name,
      last_name,
      email,
    };

    const userUpdated = await userRepository.update(id, updateUser);

    res.send({
      result: "User updated successfully",
      payload: userUpdated,
    });
  } catch (error) {
    return res.status(404).json({ message: "User not found" });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await userRepository.delete(id);
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
