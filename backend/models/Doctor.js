import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  workingHours: { type: Object, required: true }, // { start: "09:00", end: "17:00" }
});

const Doctor = mongoose.model("Doctor", doctorSchema);
export default Doctor;
