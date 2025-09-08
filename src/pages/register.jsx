import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../firebaseConfig'; // Adjust path if needed
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (password !== confirmPassword) {
    //         alert('Passwords do not match!');
    //     } else {
    //         // Handle registration logic here, e.g., send data to an API
    //         alert('Registered successfully!');
    //     }
        
    // };
    // const togglePasswordVisibility = () => {
    //     setShowPassword(!showPassword);
    //   };
      const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError('Passwords do not match!');
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log('User registered:', userCredential.user);
            alert('Registered successfully!');
            navigate("/home");
        } catch (error) {
            setError(error.message);
        }
    };
    const togglePasswordVisibility = () => {
           setShowPassword(!showPassword);
         };

    return (
        <div className="register-container text-primary">
            <h2>Register</h2>
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
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="checkbox" 
                        id="showPassword"
                        checked={showPassword}
                        onChange={togglePasswordVisibility}
                    />
                    <label htmlFor="showPassword">Show Password</label>
                </div>
                <button id="register-button" type="submit">Register</button>
            </form>
            <p id="register-p">
                Already have an account? <Link to="/login">Login here</Link>
            </p>
        </div>
    );
};

export default Register;
