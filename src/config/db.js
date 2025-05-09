import mongoose from "mongoose";
import { createDefaultUser } from "../seeds/DefaultUser.js";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {});
    createDefaultUser();
    console.log("MongoDB conectado");
  } catch (error) {
    console.error("Error de conexión:", error);
    process.exit(1);
  }
};

export default connectDB;
