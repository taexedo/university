const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    uniqueNumber: Number,
    facultyNumber: Number,
    birthDate: Date
});

module.exports = mongoose.model('Student', StudentSchema);
