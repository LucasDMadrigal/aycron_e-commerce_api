import { User } from "../models/users.model.js";

class MongoUserRepository {
  async createUser(user) {
    const newUser = new User(user);
    return await newUser.save();
  }

  async findAll() {
    return await User.find();
  }

  async findOne(email) {
    return await User.findOne({ email });
  }
  async findByEmail(email) {
    return await User.findOne({ email });
  }

  async findById(id) {
    return await User.findById(id);
  }

  async update(id, user) {
    return await User.findByIdAndUpdate(id, user, { new: true });
  }

  async delete(id) {
    return await User.findByIdAndUpdate(id, { deleted: true });
  }
}
export default MongoUserRepository;