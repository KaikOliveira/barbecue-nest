import * as mongoose from 'mongoose';

export const userSchema = new mongoose.Schema(
  {
    user: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true, collection: 'users' },
);
