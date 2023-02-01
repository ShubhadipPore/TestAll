import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema(
    {
        dop: { type: String, required: true },
        devid: { type: String, unique: true, required: true },
        name: { type: String, required: true },
        phone: { type: String, required: true },
        address: { type: String },
        distributercode: { type: String },
        actions: { type: String, enum: ["Registered", "Unregistered"], default: "Registered" }
      },
      { timestamps: true }
);

const  Customer = mongoose.model("Customer", CustomerSchema);
export default Customer;