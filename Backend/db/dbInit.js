const mongoose = require('mongoose');
const {StudentSchema} = require('../models/student')
const initDb = async () => {
    try {
        await mongoose.connect('mongodb://localhost/university', { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');

        const databaseNames = (await mongoose.connection.db.admin().listDatabases()).databases.map(db => db.name);

        // Define the Student model using the 'university' connection
        const Student = mongoose.model('Student', StudentSchema);

        if (!databaseNames.includes('university')) {

            const student = new Student({
                firstName: 'Vasil',
                lastName: 'Dudinski',
                uniqueNumber: "12345",
                facultyNumber: "1601682047",
                birthDate: new Date('1996-02-29')
            });

            await student.save();
            console.log('Student saved successfully');
        } else {
            console.log('"university" database already exists');
        }
    } catch (err) {
        console.error('Error initializing the database: ', err);
    }
};

module.exports = initDb;
