import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import '../styles.css';
import './Login.css';

const Login = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const logIn = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        await performLogin(email, password);
    };

    const performLogin = async (email, password) => {
        const auth = getAuth();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/book');
            window.scrollTo(0, 0);
        } catch (error) {
            console.error("Login error:", error);
            setErrorMessage('Invalid email or password');
        }
    };

    const handleSignupRedirect = () => {
        navigate('/signup');
        window.scrollTo(0, 0);
    };

    const loginDemoUser = async () => {
        const demoEmail = 'demouser@example.com';
        const demoPassword = 'demopassword';
        await performLogin(demoEmail, demoPassword);
    };

    return (
        <div className="login-container login-center-content">
            <div className="login-form-container">
                <h1 className="login-title">Log In</h1>
                <form className="login-form" onSubmit={logIn}>
                    <div className="login-form-group">
                        <label className="login-label">
                            Email:
                            <input type="text" name="email" className="login-input" required />
                        </label>
                    </div>
                    <div className="login-form-group">
                        <label className="login-label">
                            Password:
                            <input type="password" name="password" className="login-input" required />
                        </label>
                    </div>
                    <div className="login-form-group">
                        <button type="submit" className="login-button">Log In</button>
                        <br />
                        <br />
                        <button type="button" onClick={loginDemoUser} className="login-button">Demo User</button>
                    </div>
                    {errorMessage && <div className="login-error-message">{errorMessage}</div>}
                    <div className="login-member-check">
                        <button type="button" onClick={handleSignupRedirect} className="login-button">Not a member? Sign up now</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
