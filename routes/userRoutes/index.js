import express from "express";
import User from "../../db/model/userSchema.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const body = { ...req.body };
  await User.create(body);
  res.status(201).json({ message: "User added successfully" });
});

router.get("/", async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const users = await User.findByIdAndDelete();
  res.status(202).json(users, "deleted successfully");
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const users = await User.findByIdAndUpdate();
  res.status(202).json(users, "updated  successfully");
});

export default router;
