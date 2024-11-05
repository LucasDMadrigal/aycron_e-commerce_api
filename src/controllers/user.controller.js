import loginUserUseCase from "../core/useCases/loginUserUseCase.js";
import registerUserUseCase from "../core/useCases/registerUserUseCase.js";
import updateUserUseCase from "../core/useCases/updateUserUseCase.js";
import getUsersUseCase from "../core/useCases/getUsersUseCase.js";
import getUserByIdUseCase from "../core/useCases/getUserByIdUseCase.js";
import deleteUserUseCase from "../core/useCases/deleteUserUseCase.js";

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const result = await loginUserUseCase({ email, password });

  res.status(result.statusCode).json(result.payload);
};

export const getUsers = async (req, res) => {
  const result = await getUsersUseCase();

  res.status(result.statusCode).json(result.payload);
};

export const getUserById = async (req, res) => {
  const { id } = req.params;

  const result = await getUserByIdUseCase(id);

  res.status(result.statusCode).json(result.payload);
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
  const { first_name, last_name, email, isAdmin } = req.body;
  const result = await updateUserUseCase({ id, first_name, last_name, email, isAdmin });

  res.status(result.statusCode).json(result.payload);
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  const result = await deleteUserUseCase(id);

  res.status(result.statusCode).json(result.payload);
};

export default {
  registerUser,
  loginUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
