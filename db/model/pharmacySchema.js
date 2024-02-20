import { Schema, model } from "mongoose";

const pharmacySchema = Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  Brand: {
    type: String,
    required: true,
  },

  Price: {
    type: Number,
    required: true,
  },

  Quantity: {
    type: Number,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  expiryDate: {
    type: Date,
    required: true,
  },
});

const Pharmacy = model("Pharmacy", pharmacySchema);

export default Pharmacy;
