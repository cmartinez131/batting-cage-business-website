import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore"

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await addDoc(collection(db, "users"), {
                uid: user.uid,
                email,
                firstName: "",
                lastName: "",
                phoneNumber: ""
            });

            console.log("User signed up:", user);
            navigate('/');
        } catch (error) {
            console.error("Error signing up:", error);
            if (error.code === 'auth/email-already-in-use') {
                setErrorMessage('Email is already in use'); // Set error message
            } else {
                setErrorMessage(error.message); // For other errors, set the error message returned by Firebase
            }
        }
    };

    return (
        <div className="container center-content">
            <h1>Sign Up</h1>
            <form className="row row-col form-background" onSubmit={handleSignup}>
                <div className="col">
                    <label>
                        Email:
                        <input type="email" name="email" required />
                    </label>
                </div>
                <div className="col">
                    <label>
                        Password:
                        <input type="password" name="password" required />
                    </label>
                </div>
                <div className="col">
                    <button type="submit">Sign Up</button>
                </div>
                {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Conditionally render error message */}
                <div className="member-check">
                    Already a member? <a href="/login">Sign in now</a>
                </div>
            </form>
        </div>
    );
};

export default Signup;
