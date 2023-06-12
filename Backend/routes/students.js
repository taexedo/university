const express = require('express');
const router = express.Router();
const StudentSchema = require('../models/student')

router.get('/', async (req, res) => {
  try {
    const students = await StudentSchema.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const student = new Student({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    uniqueNumber: req.body.uniqueNumber,
    facultyNumber: req.body.facultyNumber,
    birthDate: req.body.birthDate
  });

  try {
    const newStudent = await student.save();
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedStudent = await Student.updateOne(
        { _id: req.params.id },
        { $set: req.body }
    );
    res.json(updatedStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const removedStudent = await Student.remove({ _id: req.params.id });
    res.json(removedStudent);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
