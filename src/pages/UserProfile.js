import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Adjust the path as per your project structure

const UserProfile = ({ user }) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (user) {
                // Fetch additional user data from Firestore if needed
                const userRef = doc(db, 'users', user.uid);
                const userSnap = await getDoc(userRef);
                if (userSnap.exists()) {
                    setUserData(userSnap.data());
                }
            }
        };
        fetchData();
    }, [user]);

    if (!user) return <p>Please log in to view your profile.</p>;

    return (
        <div className="profile-container">
            <h1>User Profile</h1>
            <p>Email: {user.email}</p> {/* Displaying email from the user prop */}
            {userData ? (
                <>
                    {/* Display additional user information fetched from Firestore */}
                    <p>First Name: {userData.firstName}</p>
                    <p>Last Name: {userData.lastName}</p>
                    <p>Phone Number: {userData.phoneNumber}</p>
                    {/* Display other user information as needed */}
                </>
            ) : (
                <p>Loading additional user data...</p>
            )}
        </div>
    );
};

export default UserProfile;
