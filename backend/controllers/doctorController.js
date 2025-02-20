import Doctor from "../models/Doctor.js";
import Appointment from "../models/Appointment.js";

// @desc Get all doctors
export const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: "Error fetching doctors" });
  }
};

// @desc Get available slots for a doctor
export const getAvailableSlots = async (req, res) => {
  const { id } = req.params;
  const { date } = req.query;

  try {
    const doctor = await Doctor.findById(id);
    if (!doctor) return res.status(404).json({ message: "Doctor not found" });

    const appointments = await Appointment.find({ doctorId: id, date: { $gte: new Date(date) } });

    const start = doctor.workingHours.start;
    const end = doctor.workingHours.end;
    const slots = [];

    let currentTime = new Date(`${date}T${start}`);
    let endTime = new Date(`${date}T${end}`);

    while (currentTime < endTime) {
      const isBooked = appointments.some((appt) => new Date(appt.date).getTime() === currentTime.getTime());
      if (!isBooked) slots.push(currentTime.toISOString());

      currentTime.setMinutes(currentTime.getMinutes() + 30);
    }

    res.json(slots);
  } catch (error) {
    res.status(500).json({ message: "Error calculating available slots" });
  }
};
