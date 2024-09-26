import  { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './index.css'; // Or './tailwind.css' if you renamed it

const Signup = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const Navigate = useNavigate(); 

    const handlesubmit=(e)=>{
        e.preventDefault()
        axios. post('http://localhost:3001/register',{name, email, password})   //request frontend
         .then (result =>{console.log(result)
          Navigate('/')
         })
         .catch (err=> console. log(err))
    }

  return (
<div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg border-2 border-yellow-500">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Register..!</h2>
    <form onSubmit={handlesubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setname(e.target.value)}
          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => setemail(e.target.value)}
          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) => setpassword(e.target.value)}
          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full px-4 py-2  text-white rounded-md hover: bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-500 ease-in-out transform hover:scale-105"
        >
          Register
        </button>
      </div>
    </form>
    <p className="text-center mt-4 text-sm text-gray-600">
      Already have an account? <Link className="text-blue-500 hover:underline" to="/">Login here</Link>
    </p>
  </div>
</div>

  );
};

export default Signup;
