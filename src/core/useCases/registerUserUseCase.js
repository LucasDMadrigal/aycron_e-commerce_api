import MongoUserRepository from "../../infrastructure/mongoUserRepository.js";
import { User } from "../models/users.model.js";
import bcrypt from "bcryptjs";

const userRepository = new MongoUserRepository();

const registerUserUseCase = async ({ first_name, last_name, email, password }) => {
  const user = await userRepository.findByEmail(email);

  if (user) {
    return { statusCode: 400, message: "User already exists" };
  }

  const encryptedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    first_name,
    last_name,
    email,
    password: encryptedPassword,
  });
  const userCreated = await userRepository.createUser(newUser);
  return { statusCode: 201, payload: userCreated };
};

export default registerUserUseCase;
