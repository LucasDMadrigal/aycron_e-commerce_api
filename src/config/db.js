import mongoose from 'mongoose';
// const dotenv = require('dotenv');
// dotenv.config();

console.log(process.env.MONGODB_URI);


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log('MongoDB conectado');
  } catch (error) {
    console.error('Error de conexión:', error);
    process.exit(1);
  }
};

export default connectDB