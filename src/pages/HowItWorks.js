import React from 'react';
import './HowItWorks.css';
import coverImage from '../assets/home-cover.png'; // This can be the background for the header if needed
import { useNavigate } from 'react-router-dom';

const HowItWorks = () => {
    const navigate = useNavigate(); // Create the navigate function

    const handleLetsPlayClick = () => {
        navigate('/book'); // Use navigate to change the page
        window.scrollTo(0.0); // Scroll to the top of the new page
    }


    return (
        <div className="how-it-works-container">
            <div className="header-section" style={{ backgroundImage: `url(${coverImage})` }}>
                <h1 className="cover-title">How it Works</h1>
            </div>

            <div className="steps-header">
                <h2>3-Easy Steps:</h2>
            </div>

            <div className="steps-section">
                <div className="step">
                    <div className="number-circle">1</div>
                    <h2 className='step-title'>Sign Up</h2>
                    <p className='step-description'>Create an account online (link below)</p>
                </div>
                <div className="step">
                    <div className="number-circle">2</div>
                    <h2 className='step-title'>Reserve</h2>
                    <p className='step-description'>Book with a credit card to reserve your spot</p>
                </div>
                <div className="step">
                    <div className="number-circle">3</div>
                    <h2 className='step-title'>Play!</h2>
                    <p className='step-description'>Invite your friends and go hit</p>
                </div>
            </div>
            <div className="cta-section">
                <button className="cta-button" onClick={handleLetsPlayClick}>LET'S PLAY</button>
            </div>
        </div>
    );
}

export default HowItWorks;
