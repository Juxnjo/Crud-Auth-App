import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://juxnjo:juxnjo.dev@mern-crud-auth-app.yk9fmbf.mongodb.net/?retryWrites=true&w=majority");
    console.log(">>> DB is connected");
  } catch (error) {
    console.log(error);
  }
};
