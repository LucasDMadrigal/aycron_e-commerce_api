import MongoUserRepository from "../../infrastructure/mongoUserRepository.js";

const userRepository = new MongoUserRepository();
const getUserByIdUseCase = async (id) => {
  const user = await userRepository.findById(id);

  if (!user) {
    return { statusCode: 404, payload: "User not found" };
  }

  return { statusCode: 200, payload: user };
};

export default getUserByIdUseCase;
