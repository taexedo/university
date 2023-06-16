const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    uniqueNumber: String,
    facultyNumber: String,
    birthDate: Date
});

module.exports = mongoose.model('Student', StudentSchema);
