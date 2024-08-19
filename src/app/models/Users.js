import mongoose, { Schema } from "mongoose";

const User = new Schema(
  {
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    fullname: { type: String, require: true },
    address: { type: String, require: true },
    image: { type: String, require: true },
    dateOfBirth: { type: Date, require: true },
  },
  { timestamps: true }
);

export default mongoose.model("User", User);
