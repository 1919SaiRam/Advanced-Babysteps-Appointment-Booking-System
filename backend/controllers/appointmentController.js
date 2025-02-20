import Appointment from "../models/Appointment.js";

// @desc Create appointment
export const createAppointment = async (req, res) => {
  const { doctorId, date, duration, appointmentType, patientName, notes } = req.body;

  try {
    const existingAppt = await Appointment.findOne({ doctorId, date });
    if (existingAppt) return res.status(400).json({ message: "Slot already booked" });

    const appointment = new Appointment({ doctorId, date, duration, appointmentType, patientName, notes });
    await appointment.save();

    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({ message: "Error booking appointment" });
  }
};
