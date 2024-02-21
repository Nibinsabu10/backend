import express from "express";
import Department from "../../db/model/departmentSchema.js";
import checkToken from "../../middlewares/checkToken.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const body = { ...req.body };
  await Department.create(body);
  res.status(201).json({ message: "Department added successfully" });
});

router.get("/", checkToken, async (req, res) => {
  const departments = await Department.find();
  res.status(200).json(departments);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const departments = await Department.findByIdAndDelete();
  res.status(202).json(departments, "deleted successfully");
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const departments = await Department.findByIdAndUpdate();
  res.status(202).json(departments, "updated  successfully");
});

export default router;
