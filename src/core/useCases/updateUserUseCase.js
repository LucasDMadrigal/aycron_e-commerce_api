import MongoUserRepository from "../../infrastructure/mongoUserRepository.js";

const userRepository = new MongoUserRepository();

const updateUserUseCase = async ({ id, first_name, last_name, email, isAdmin }) => {
  const user = await userRepository.update(id, {
    first_name,
    last_name,
    email,
    isAdmin
  });

  if (!user) {
    return { statusCode: 404, payload: "User not found" };
  }

  return { statusCode: 200, payload: user };
};

export default updateUserUseCase;
