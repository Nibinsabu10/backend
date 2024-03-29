import { Schema, model } from "mongoose";

const appointmentSchema = Schema({
  doctor: {
    type: Schema.Types.ObjectId,
    ref: "Doctor",
  },

  User: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  Slot: {
    type: Schema.Types.ObjectId,
    ref: "Slot",
  },
});

const Appointment = model("Appointment", appointmentSchema);

export default Appointment;
