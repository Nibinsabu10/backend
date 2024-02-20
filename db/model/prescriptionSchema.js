import { Schema, model } from "mongoose";

const prescriptionSchema = Schema({
  User: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  doctor: {
    type: Schema.Types.ObjectId,
    ref: "Doctor",
  },

  appointment: {
    type: Schema.Types.ObjectId,
    ref: "Appointment",
  },

  message: {
    type: String,
    required: true,
  },

  medication: [{ type: Schema.Types.ObjectId, ref: "Pharmacy" }],
});

const Prescription = model("Prescription", prescriptionSchema);

export default Prescription;
