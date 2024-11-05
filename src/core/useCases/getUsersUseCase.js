import MongoUserRepository from "../../infrastructure/mongoUserRepository.js";

const userRepository = new MongoUserRepository();
const getUsersUseCase = async () => {
  const users = await userRepository.findAll();
  return { statusCode: 200, payload: users };
};

export default getUsersUseCase;
