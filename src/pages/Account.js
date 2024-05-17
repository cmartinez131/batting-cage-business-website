import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAuth } from "firebase/auth";
import '../styles.css';
import './Account.css';

const Account = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        const currentUser = auth.currentUser;
        setUser(currentUser);
    }, []);

    return (
        <div className="account-container">
            <div className="account-info">
                <h2 className="account-title">Account</h2>
                {user && (
                    <>
                        <h3 className="account-subtitle">Welcome, {user.email}</h3>
                        <p><strong>User ID:</strong> {user.uid}</p>
                    </>
                )}
                <div className="account-links">
                    <h3 className="account-section-title">Navigation</h3>
                    <ul>
                        <li><Link className="account-link" to="/book">Book a Cage</Link></li>
                        <li><Link className="account-link" to="/">Purchase History</Link></li>
                        <li><Link className="account-link" to="/">Help Center</Link></li>
                    </ul>
                </div>
            </div>
            <div className="account-edit">
                <h3 className="account-section-title">Account Info</h3>
                <form className="account-form">
                    <div className="account-form-group">
                        <label className="account-label">Email:</label>
                        <input type="email" className="account-input" value={user ? user.email : ''} readOnly />
                    </div>
                    <div className="account-form-group">
                        <label className="account-label">First Name:</label>
                        <input type="text" className="account-input" placeholder="First Name" />
                    </div>
                    <div className="account-form-group">
                        <label className="account-label">Last Name:</label>
                        <input type="text" className="account-input" placeholder="Last Name" />
                    </div>
                    <div className="account-form-group">
                        <label className="account-label">Phone Number:</label>
                        <input type="tel" className="account-input" placeholder="Phone Number" />
                    </div>
                    <button type="submit" className="account-button">Update Account</button>
                </form>
            </div>
        </div>
    );
};

export default Account;
