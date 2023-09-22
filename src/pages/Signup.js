import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore"
import '../styles.css'; // Adjust the path as per your project structure

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
                    <label>
                        <input 
                            type="checkbox" 
                            onChange={() => setHasAgreed(!hasAgreed)} // Toggle the checkbox state
                            required 
                        />
                        I have read and agree to the <a href="/terms" className="terms-privacy-links">Terms of Service</a> and <a href="/privacy" className="terms-privacy-links">Privacy Policy</a>
                    </label>
                </div>
                <div className="col">
                    <button type="submit" disabled={!hasAgreed}>Sign Up</button> {/* Disable the button if not agreed */}
                </div>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <div className="member-check">
                    <a href="/login">Already a member? Sign in now</a>
                </div>
            </form>
        </div>
    );
};

export default Signup;
