import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    console.log(`port ${conn.connection.port}`);
    console.log(`port ${conn.connection.name}`);
  } catch (error) {
    console.error("Database connection failed");
    process.exit(1);
  }
};

export default connectDB;
