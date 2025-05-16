import bcrypt from "bcryptjs";
import MongoUserRepository from "../../infrastructure/mongoUserRepository.js";
import jwt from "jsonwebtoken";

const userRepository = new MongoUserRepository();

const loginUserUseCase = async ({ email, password }) => {
  const user = await userRepository.findByEmail(email);

  if (!user) {
    return { statusCode: 401, payload: "Invalid email" };
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return { statusCode: 401, payload: "Invalid password" };
  }

  const token = jwt.sign(
    {
      first_name: user.first_name,
      last_name: user.last_name,
      userId: user._id,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  return { statusCode: 202, payload: token };
};

export default loginUserUseCase;
