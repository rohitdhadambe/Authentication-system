const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true // Automatically add createdAt and updatedAt fields
});

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;
