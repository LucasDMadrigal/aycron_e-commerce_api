import MongoUserRepository from "../repositories/user.repository.js";

const userRepository = new MongoUserRepository();

const updateUserUseCase = async ({ id, first_name, last_name, email }) => {
  const user = await userRepository.update(id, {
    first_name,
    last_name,
    email,
  });

  if (!user) {
    return { statusCode: 404, message: "User not found" };
  }

  return { statusCode: 200, payload: user };
};

export default updateUserUseCase;
