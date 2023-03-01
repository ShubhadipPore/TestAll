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
import DeviceInfo from "./models/deviceinfo.js"
import {
  mockDataCustomers
} from "./data/data.js";



/** CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/**ROUTES */

app.use("/analytics", analyticsRoutes);
app.use("/customers", customersRoutes);
// app.use("/deviceonboarding", deviceonboardingRoutes);
// app.use("/deviceconfiguration", deviceconfigurationRoutes);

// app.use("/distributers", distributersRoutes);



/** Test Base API */
app.get('/', (req, res) => {
  res.json({
    msg: 'Hello Aliens'
  })
})

/**MONGOOSE SETUP */

mongoose.set('strictQuery', false);
const PORT = process.env.PORT || 9000;

/**MQTT SETUP */
import mqtt from 'mqtt';

const host = 'public.mqtthq.com';
const port = '1883';
const clientId = `mqttx_58ad1ed2`;

const connectUrl = `mqtt://${host}:${port}`
const client = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 4000,
  //username: 'Shubha',
  //password: '1234',
  reconnectPeriod: 1000,
})

const topic = 'ion';
client.on('connect', () => {
  console.log('Connected')
  client.subscribe([topic], () => {
    console.log(`Subscribe to topic '${topic}'`)
  })
  client.publish(topic, 'nodejs mqtt test', { qos: 0, retain: false }, (error) => {
    if (error) {
      console.error(error)
    }
  })
})
client.on('message', (topic, payload) => {
  const _payload = payload.toString();
  const objDevinfo =  JSON.parse(_payload);

  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
      DeviceInfo.insertMany(objDevinfo);
    })
    .catch((error) => console.log(`${error} did not connect`));

  console.log('Received Message:', topic, payload.toString())
})









