import mongoose from "mongoose";

const DeviceInfoSchema = new mongoose.Schema(
  {
    DevId: { type: String},
    Time: { type: String },
    PackVoltage: { type: Number },
    PortVoltage: { type: Number },
    PackTemprature: { type: Number },
    PcbTemprature: { type: Number },
    LoadCurrent: { type: Number },
    ChargeCurrent: { type: Number },
    Cell_1Volt: { type: Number },
    Cell_2Volt: { type: Number },
    Cell_3Volt: { type: Number },
    Cell_4Volt: { type: Number },
    Cell_5Volt: { type: Number },
    Cell_6Volt: { type: Number },
    Cell_7Volt: { type: Number },
    Cell_8Volt: { type: Number },
    Cell_9Volt: { type: Number },
    Cell_10Volt: { type: Number },
    Cell_11Volt: { type: Number },
    Cell_12Volt: { type: Number },
    Cell_13Volt: { type: Number },
    Cell_14Volt: { type: Number },

    Ball_1Status: { type: Boolean },
    Ball_2Status: { type: Boolean },
    Ball_3Status: { type: Boolean },
    Ball_4Status: { type: Boolean },
    Ball_5Status: { type: Boolean },
    Ball_6Status: { type: Boolean },
    Ball_7Status: { type: Boolean },
    Ball_8Status: { type: Boolean },
    Ball_9Status: { type: Boolean },
    Ball_10Status: { type: Boolean },
    Ball_11Status: { type: Boolean },
    Ball_12Status: { type: Boolean },
    Ball_13Status: { type: Boolean },
    Ball_14Status: { type: Boolean },

    SysStatus: { type: Number },
    RtcFault: { type: Boolean },
    MemoryFault: { type: Boolean },
    GsmFault: { type: Boolean },
    SimFault: { type: Boolean },
    NetworkFault: { type: Boolean },
    TempPcbFault: { type: Boolean },
    TempPackFault: { type: Boolean },
    OverLoadFault: { type: Boolean },
    OverVolatgeFault: { type: Boolean },
    UnderVoltageFault: { type: Boolean },
    AFEFault: { type: Boolean },
    ShortCircuitFault: { type: Boolean },
    CellOVFault: { type: Boolean },
    CellUVFault: { type: Boolean },
    I2CComfault: { type: Boolean },
    FanStatus: { type: Boolean },
    DisChargeMOSStatus: { type: Boolean },
    ChargeMOSStatus: { type: Boolean },
    NetworkStrenth: { type: Number },
    GPSStatus: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

DeviceInfoSchema.set("autoIndex", true);

const DeviceInfo = mongoose.model("device_info", DeviceInfoSchema);
export default DeviceInfo;