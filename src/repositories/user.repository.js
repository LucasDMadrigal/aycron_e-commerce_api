// src/domain/repositories/userRepository.js
import UserModel from '../../infrastructure/database/models/userModel';

const userRepository = {
  async findByEmail(email) {
    return await UserModel.findOne({ email });
  }
};

export default userRepository;