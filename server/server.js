import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(cors());

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => {
      console.log(`Server listening on port: ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
