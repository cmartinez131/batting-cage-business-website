import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import '../styles.css'; // Adjust the path as per your project structure

const Login = () => {
    const [errorMessage, setErrorMessage] = useState(''); // State to hold the error message
    const navigate = useNavigate();

    const logIn = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const auth = getAuth();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (error) {
            setErrorMessage('Invalid email or password'); // Set the error message on failure
        }
    };

    return (
        <div className="container center-content">
            <h1>Log In</h1>
            <form className="row row-col" onSubmit={logIn}>
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
                </div>
                {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Conditionally render error message */}
            </form>
        </div>
    );
};

export default Login;
