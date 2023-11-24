import React, { useState } from "react";
import { useAuth } from '../../Context/Auth/Auth1';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import style from './LoginPage.module.scss';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth(); // Destructuring the 'login' function from context
  const navigate = useNavigate(); // Hook to navigate

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await login(email, password); // Use the 'login' method from AuthProvider
      console.log("Logged in as", email);
      navigate('/main'); // Navigate to '/main' after login
    } catch (error) {
      console.error("Error in login", error);
    }
  };

  return (
    <form className={style.loginForm} onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;