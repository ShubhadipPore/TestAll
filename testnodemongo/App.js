import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import analyticsRoutes from './routes/analytics.js';
// import deviceonboardingRoutes from './routes/analytics.js';
// import deviceconfigurationRoutes from './routes/analytics.js';
import customersRoutes from './routes/customers.js';
// import distributersRoutes from './routes/analytics.js';

// Add Data in DB


/**Import Data */
import Customer from "./models/customers.js";
import {
  mockDataCustomers
} from "./data/data.js";



/** CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

/**ROUTES */

app.use("/analytics", analyticsRoutes);
app.use("/customers", customersRoutes);
// app.use("/deviceonboarding", deviceonboardingRoutes);
// app.use("/deviceconfiguration", deviceconfigurationRoutes);

// app.use("/distributers", distributersRoutes);



/** Test Base API */
app.get('/',(req,res) =>{
  res.json({
      msg : 'Hello Aliens'
  })
})

/**MONGOOSE SETUP */

mongoose.set('strictQuery', false);
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /**ADD Data One Time */
    //Customer.insertMany(mockDataCustomers);
  })
  .catch((error) => console.log(`${error} did not connect`));


