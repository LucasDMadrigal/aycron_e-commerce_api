import userRepository from "../repositories/userRepository.js";
const getUsersUseCase = async () => {
  const users = await userRepository.findAll();
  return users;
};

export default getUsersUseCase;
