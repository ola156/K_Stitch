import { mongoose } from "mongoose";
const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("dbconnected");
  });
  await mongoose.connect(`${process.env.MONGODB_URL}/K_stitch`);
};

export default connectDB;
