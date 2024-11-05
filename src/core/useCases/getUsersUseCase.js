import MongoUserRepository from "../repositories/userRepository.js";

const userRepository = new MongoUserRepository();
const getUsersUseCase = async () => {
  const users = await userRepository.findAll();
  return users;
};

export default getUsersUseCase;
