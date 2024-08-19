import mongoose, { Schema } from "mongoose";

const Course = new Schema(
  {
    name: { type: String, require: true },
    description: { type: String },
    slug: { type: String, require: true, unique: true,},
  },
  { timestamps: true }
);

export default mongoose.model("Course", Course);
