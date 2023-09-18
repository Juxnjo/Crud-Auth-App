import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("");
    console.log(">>> DB is connected");
  } catch (error) {
    console.log(error);
  }
};
