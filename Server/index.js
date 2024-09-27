const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Employee = require('./models/Employee');

const app = express();
app.use(express.json());
app.use(cors());

//mongoose.connect("mongodb://localhost:27017/Employee")  //local connection
mongoose.connect("mongodb+srv://rohitdhadambe:Rohit%40%23%24123@cluster0.fjstk.mongodb.net/EmployeeDB?retryWrites=true&w=majority")   //Atlas connection

.then(() => console.log("MongoDB connected"))
.catch((error) => console.error("MongoDB connection failed:", error));

    app.post('/login', (req, res) => {
        const {email, password} = req.body;
        Employee.findOne({email : email})
        .then(user =>{
            if(user){
                if(user.password === password){
                    res.json("SUCCESS")
                }else{
                    res.json("PASSWORD IS WRONG")
                }
            }else{
                res.json("NO RECORD EXIST")
            }
        })

    });
  


// POST route for registering an employee
app.post('/register', (req, res) => {
    Employee.create(req.body)
        .then(employee => res.status(201).json(employee))
        .catch(error => res.status(400).json({ error: error.message }));
});

app.listen(3001, () => {
    console.log("Server is running on port 3001...");
});
