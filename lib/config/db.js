import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://Kibe:Kibe2525%2A%23@cluster0.xapdkma.mongodb.net/todo-app"
  );
  console.log("db connected");
};
