import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";    //firebase authentication methods
import { addDoc, collection } from "firebase/firestore"     //firestore methods

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();  // React Router v6 useNavigate hook

    const handleSignup = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;


            // add a new document to the "users" collection with the user's info
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                email,
                firstName: "", // Initialize with empty string
                lastName: "",
                phoneNumber: "" 
                // add other fields as needed
            });

            console.log("User signed up:", user);
            alert("Successfully signed up!");
            navigate('/');  // Redirect to home page after successful signup
        } catch (error) {
            console.error("Error signing up:", error);
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
                <div className="member-check">
                    Already a member? <a href="/login">Sign in now</a>
                </div>
            </form>
        </div>
    );
};

export default Signup;
