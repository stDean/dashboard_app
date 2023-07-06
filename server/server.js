import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";

import ClientRoute from "./routes/client";
import ManagementRoute from "./routes/management";
import GeneralRoute from "./routes/general";
import SalesRoute from "./routes/sales";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(cors());
app.use(morgan("common"));

/* Routes */
//  client routes i.e routes that clients can access
app.use("/api/v1/client", ClientRoute);

// General routes
app.use("/api/v1/general", GeneralRoute);

// management routes
app.use("api/v1/management", ManagementRoute);

// sales routes
app.use("api/v1/sales", SalesRoute);

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
