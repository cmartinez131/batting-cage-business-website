import React from 'react';
import './HowItWorks.css';
import coverImage from '../assets/home-cover.png';

const HowItWorks = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src={coverImage} alt="Cover" className="cover-image" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h1 className='page-heading'>How it works:</h1>
                    <ol>
                        <li>Visit the Website or Download the App</li>
                        <li>Choose Your Cage and Time</li>
                        <li>Book a Cage</li>
                        <li>Payment</li>
                        <li>Confirmation</li>
                        <li>Arrive and Bat</li>
                        <li>Visit the Website or Download the App</li>
                        <li>Choose Your Cage and Time</li>
                        <li>Book a Cage</li>
                        <li>Payment</li>
                        <li>Confirmation</li>
                        <li>Arrive and Bat</li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default HowItWorks;