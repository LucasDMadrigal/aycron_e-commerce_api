// src/seeds/createDefaultUser.js
import MongoUserRepository from "../infrastructure/mongoUserRepository.js";
import { User } from "../core/models/users.model.js";
import bcrypt from "bcryptjs";
import registerUserUseCase from "../core/useCases/registerUserUseCase.js";

export const createDefaultUser = async () => {
  const email = "admin@admin.com";

  const existingUser = await User.findOne({ email });

  if (!existingUser) {

    const newUser = {
      first_name: "Lucas",
      last_name: "Admin",
      email,
      password: "admin123",
      isAdmin: true,
    };

    await registerUserUseCase(newUser);

    console.log("Usuario administrador por defecto creado.");
  } else {
    console.log("El usuario por defecto ya existe.");
  }
};
