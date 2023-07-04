import mongoose from "mongoose";

const connectDB = (uri) =>
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

export default connectDB;
