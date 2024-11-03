import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  deleted: { type: Boolean, default: false },
  Products:{type: mongoose.Schema.Types.ObjectId, ref: 'Product', default: null}
});

export const User = mongoose.model('User', userSchema)