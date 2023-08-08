require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;

const ClientRoute = require("./routes/client");
const ManagementRoute = require("./routes/management");
const GeneralRoute = require("./routes/general");
const SalesRoute = require("./routes/sales");

const User = require("./model/User");
const {
  dataAffiliateStat,
  dataOverallStat,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataUser,
} = require("./data");

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

    // RUN ONLY ONCE!!
    // User.insertMany(dataUser);

    app.listen(PORT, () => {
      console.log(`Server listening on port: ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
