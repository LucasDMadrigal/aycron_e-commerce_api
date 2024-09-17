import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/users.model.js";

class MongoUserRepository {
  async save(user) {
    const newUser = new User(user);
    return await newUser.save();
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
