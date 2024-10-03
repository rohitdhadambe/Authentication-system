import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import './index.css'; // Or './tailwind.css' if you renamed it


const Login = () => {
  // States to store email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // React Router's useNavigate to programmatically navigate
  const navigate = useNavigate();

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    // Axios POST request to the backend API
    axios.post('https://react-login-project.vercel.app/login', { email, password })
      .then((result) => {
        console.log(result.data);
        if (result.data === "SUCCESS") {
          navigate('/home'); // Navigate to '/home' route on success
        } else {
          alert("Invalid login credentials!"); // Show an error message on failure
        }
      })
      .catch((err) => console.log(err)); // Handle error
  };

  return (
    
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg border-2 border-yellow-500">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-500 ease-in-out transform hover:scale-105"
          >
            Login
          </button>
        </div>
      </form>
      <p className="text-center mt-4 text-sm text-gray-600">
        Dont have an account? <Link className="text-blue-500 hover:underline" to="/register">Register here</Link>
      </p>
    </div>
  </div>
  
  );
};

export default Login;
