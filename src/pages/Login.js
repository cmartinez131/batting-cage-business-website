import React from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const logIn = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const auth = getAuth(); // consistent with Signup.js

        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Successfully logged in!");
            navigate('/');
        } catch (error) {
            alert(error.message);
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
            </form>
        </div>
    );
};

export default Login;
