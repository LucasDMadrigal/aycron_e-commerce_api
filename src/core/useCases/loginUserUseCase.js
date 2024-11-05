import bcrypt from "bcryptjs";
import MongoUserRepository from "../../infrastructure/mongoUserRepository.js";
import jwt from "jsonwebtoken";

const userRepository = new MongoUserRepository();

const loginUserUseCase = async ({ email, password }) => {
  const user = await userRepository.findByEmail(email);

  if (!user) {
    // return res.status(401).json({ payload: "Invalid email or password" });
    return { statusCode: 401,  payload: "Invalid email or password" };
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    // return res.status(401).json({  });
    return { statusCode: 401, payload: "Invalid email or password" };
  }

  const token = jwt.sign(
    { userId: user._id, isAdmin: user.isAdmin },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  return { token };
};

export default loginUserUseCase;
