import React, { useEffect } from 'react';
import './pageStyles.css';
import coverImage from '../assets/home-cover.png';
import img3 from '../assets/features/image3.png';
import img5 from '../assets/features/image5.png';
import hittrax1 from '../assets/features/hittrax1.jpeg';
import hittrax2 from '../assets/features/hittraxexample.png';
import './Features.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Features = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="features-container">
            <h1 className="feature-page-title">What We Offer</h1>
            <div className="feature-item" data-aos="fade-up" data-aos-delay="100">
                <div className="feature-text">
                    <h2 className="feature-title">Batting Cages</h2>
                    <p className="feature-description">6 state-of-the-art batting cages designed for various skill levels featurng baseball, fastpitch, and slowpitch softball are available.</p>
                </div>
                <img src={img5} alt="Batting Cages" className="features-img" />
            </div>
            <div className="feature-item" data-aos="fade-up" data-aos-delay="100">
                <div className="feature-text">
                    <h2 className="feature-title">Advanced Pitching Machines</h2>
                    <p className="feature-description">Advanced pitching machines simulate batting against your favorite MLB pitchers like Shohei Ohtani or Mariano Rivera.</p>
                    <p className="feature-description">Other pitching machine features:</p>
                    <ul className="feature-list">
                        <li>Pitches fastballs, curveballs, sliders, changeups, and more</li>
                        <li>Reaches a maximum speed of 100 mph</li>
                        <li>Offers baseball, softball, and combo options</li>
                        <li>Compatible with both dimpled and leather balls</li>
                    </ul>
                </div>
                <img src={img3} alt="Pitching Machines" className="features-img" />
            </div>
            <div className="feature-item" data-aos="fade-up" data-aos-delay="100">
                <div className="feature-text">
                    <h2 className="feature-title">Data Capture Simulation System</h2>
                    <p className="feature-description">Enhance your training with HitTrax™ real-time statistics and key-performance metrics such as:</p>
                    <ul className="feature-list">
                        <li>Ball Velocity</li>
                        <li>Distance</li>
                        <li>Pitch Speed</li>
                        <li>Strike Zone Analysis</li>
                    </ul>
                </div>
                <img src={hittrax1} alt="Hittrax image 1" className="features-img" />
            </div>
            <div className="feature-item" data-aos="fade-up" data-aos-delay="100">
                <div className="feature-text">
                    <h2 className="feature-title">App Integration</h2>
                    <p className="feature-description">Enhance your experience with our integrated app. Features include:</p>
                    <ul className="feature-list">
                        <li>Pay through the app with secure transactions</li>
                        <li>Save and earn rewards points for each visit</li>
                        <li>Receive exclusive discounts and offers</li>
                        <li>Select your pitch type and speed through the app</li>
                        <li>Save and analyze your HitTrax data sessions</li>
                    </ul>
                </div>
                <img src={hittrax2} alt="App Integration" className="features-img" /> {/* Placeholder image */}
            </div>
        </div>
    );
}

export default Features;