const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Employee = require('./models/Employee');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/Employee")

.then(() => console.log("MongoDB connected"))
.catch((error) => console.error("MongoDB connection failed:", error));

// POST route for registering an employee
app.post('/register', (req, res) => {
    Employee.create(req.body)
        .then(employee => res.status(201).json(employee))
        .catch(error => res.status(400).json({ error: error.message }));
});

app.listen(3001, () => {
    console.log("Server is running on port 3001...");
});
