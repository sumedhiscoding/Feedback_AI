import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void>{
  if (connection.isConnected) {
    console.log("Already connected to database");
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {});
    connection.isConnected = db.connections[0].readyState;

    console.log("Connected Successfully to DB");
  } catch (error) {
    console.log("Error in connecting to DB", error);
    process.exit();
  }
};

export default dbConnect;