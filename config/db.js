const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
