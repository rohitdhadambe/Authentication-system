import  { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const Navigate = useNavigate(); 

    const handlesubmit=(e)=>{
        e.preventDefault()
        axios. post('http://localhost:3001/register',{name, email, password})   //request frontend
         .then (result =>{console.log(result)
          Navigate('/login')
         })
         .catch (err=> console. log(err))
    }

  return (
    <div className="signup-container">
      <h2>Register..!</h2>
      <form onSubmit={handlesubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e)=> setname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e)=> setemail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e)=> setpassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" >Register</button>
        </div>
      </form>
      <p>Already have an account? <Link to="/login" >Login here</Link></p>
    </div>
  );
};

export default Signup;
