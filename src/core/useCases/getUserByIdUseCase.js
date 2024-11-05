import mongoUserRepository from "../../infrastructure/mongoUserRepository";

const userRepository = new mongoUserRepository();
const getUserByIdUseCase = async (id) => {
  const user = await userRepository.findById(id);

  if (!user) {
    return { statusCode: 404, message: "User not found" };
  }

  return { statusCode: 200, payload: user };
};

export default getUserByIdUseCase;
