import mongoose from "mongoose";
import "dotenv/config";
let ConnectBD = async () => {
  try {
    await mongoose
      .connect(process.env.DATABASE)
      .then(() => console.log("Connect database succesfully!"));
  } catch (error) {
    console.log("Connect database failure!", error);
  }
};

export default { ConnectBD };
