import mongoose from "mongoose";
import "dotenv/config"
const URI = process.env.MONGODB_URL;
mongoose.connect(URI);
// const url = 'mongodb://127.0.0.1:27017/ef_rc_2023_backend'
// mongoose.connect(url);
const connection = mongoose.connection;

connection.once('open', () => {
  console.log('BD conectada');
});
