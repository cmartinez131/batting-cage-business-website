import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import '../styles.css';

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
        <div className="container center-content">
            <h1>Log In</h1>
            <form className="row row-col form-background" onSubmit={logIn}>
                <div className="col">
                    <label>
                        Email:
                        <input type="text" name="email" required />
                    </label>
                </div>
                <div className="col">
                    <label>
                        Password:
                        <input type="password" name="password" required />
                    </label>
                </div>
                <div className="col">
                    <button type="submit">Log In</button>
                    <br />
                    <br />
                    <button type="button" onClick={loginDemoUser}>Demo User</button>
                </div>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <div className="member-check">
                    <button onClick={handleSignupRedirect}>Not a member? Sign up now</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
