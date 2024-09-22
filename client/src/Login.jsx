import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

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
    axios.post('http://localhost:3001/login', { email, password })
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
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email} // Controlled input for email
            onChange={(e) => setEmail(e.target.value)} // Update email state
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password} // Controlled input for password
            onChange={(e) => setPassword(e.target.value)} // Update password state
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
      <p>Dont have an account? <Link to="/register">Register here</Link></p>
    </div>
  );
};

export default Login;
