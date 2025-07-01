import mongoose from "mongoose";

export const ConnectDB = async () => {
  const MONGODB_URI = process.env.MONGODB_URI;
  await mongoose.connect(MONGODB_URI);
  console.log("db connected");
};
