import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../firebaseConfig"; 
import { signInWithEmailAndPassword } from "firebase/auth";

  const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); 
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError(""); 
  
      try {
        console.log('user')
        const detail = await signInWithEmailAndPassword(auth, email, password);
        console.log('detail',detail);
        // alert("Login successful!");
        navigate("/home"); // Redirect to the home after login
      } catch (error) {
        console.log("error",error )
        setError("Invalid credentials")
      }
    };

  return (
    <div className="login-container text-primary">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <label style={{color:'red', fontSize:18}}>{error}</label>
        <button id="login-button" type="submit">Login</button>
      </form>
      <p id="login-p">
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
    
  );
};

export default Login;
