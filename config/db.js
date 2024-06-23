import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Conneted To Mongodb Databse ${conn.connection}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`.bgRed.white);
  }
}; 

export default connectDB;
