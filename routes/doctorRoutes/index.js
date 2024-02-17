import express from "express";
import Doctor from "../../db/models/doctorSchema";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const body = { ...req.body };

  const doctor = await Doctor.findOne({ username: body.username });
  if (doctor) {
    res.status(403).json({ message: "username already taken" });
  }

  if (body.password !== body.confirmPassword) {
    res.status(403).json({ message: "password dont match" });
  }
  const hashedPassword = bcrypt.hash(body.password, 2);

  body.password = hashedPassword;

  await Doctor.create(body);

  res.status(201).json({ message: "Signup successfull" });
});

router.post("/login", (req, res) => {
  res.status(200).json({ message: "Login successfull" });
});

export default router;
