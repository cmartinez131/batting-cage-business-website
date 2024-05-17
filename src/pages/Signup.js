import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import '../styles.css';
import './Signup.css';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [hasAgreed, setHasAgreed] = useState(false); // State to manage the checkbox

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
                setErrorMessage('Email is already in use');
            } else {
                setErrorMessage(error.message);
            }
        }
    };

    return (
        <div className="signup-container signup-center-content">
            <div className="signup-form-container">
                <h1 className="signup-title">Sign Up</h1>
                <form className="signup-form" onSubmit={handleSignup}>
                    <div className="signup-form-group">
                        <label className="signup-label">
                            Email:
                            <input type="email" name="email" className="signup-input" required />
                        </label>
                    </div>
                    <div className="signup-form-group">
                        <label className="signup-label">
                            Password:
                            <input type="password" name="password" className="signup-input" required />
                        </label>
                    </div>
                    <div className="signup-form-group">
                        <label className="signup-label">
                            <input 
                                type="checkbox" 
                                onChange={() => setHasAgreed(!hasAgreed)} // Toggle the checkbox state
                                required 
                            />
                            I have read and agree to the <a href="/terms" className="signup-terms-privacy-links">Terms of Service</a> and <a href="/privacy" className="signup-terms-privacy-links">Privacy Policy</a>
                        </label>
                    </div>
                    <div className="signup-form-group">
                        <button type="submit" className="signup-button" disabled={!hasAgreed}>Sign Up</button> {/* Disable the button if not agreed */}
                    </div>
                    {errorMessage && <div className="signup-error-message">{errorMessage}</div>}
                    <div className="signup-member-check">
                        <a href="/login" className="signup-link">Already a member? Sign in now</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
