const express = require('express');
const router = express.Router();
const StudentSchema = require('../models/student')
const { v4: uuidv4 } = require('uuid');

router.get('/', async (req, res) => {
  try {
    const students = await StudentSchema.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const student = new StudentSchema({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    uniqueNumber: uuidv4(),
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

router.put('/', async (req, res) => {
  try {
    const updatedStudent = await StudentSchema.updateOne(
        { _id: req.body._id },
        { $set: req.body }
    );
    res.json(updatedStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const removedStudent = await StudentSchema.deleteOne({ _id: req.params.id });
    res.json(removedStudent);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
