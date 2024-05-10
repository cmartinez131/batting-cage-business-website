import React, { useEffect } from 'react';
import './home.css';
import homepage1 from '../assets/homepage1.png';
import homepage2 from '../assets/homepage2.png';
import homepage3 from '../assets/homepage3.png';
// import homepage4 from '../assets/homepage4.png';
import battingVideo1 from '../assets/battingvideo1.mp4';
import battingVideo2 from '../assets/battingvideo2.mp4';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/battinghero1.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

    // can maybe implement lazy loading for images and videos so that 
    // they are only loaded when they enter the visible part of the web page screen
    useEffect(() => {
        AOS.init({
            duration: 800,  // Global animation duration in milliseconds
              // Whether animation should happen only once - while scrolling down
        });
    }, []);

    const navigate = useNavigate();

    const handleReserveClick = () => {
        // scroll to the top of the page when navigating
        navigate('/book');
        window.scrollTo(0, 0);
    };

    const handleLearnMoreClick = () => {
        navigate('features');
        window.scrollTo(0, 0);
    };

    return (
        <div className="home">
            <div className="hero-container">
                <div className="hero-text-container">
                    <h1 className="hero-title">Welcome to the future of batting cages.</h1>
                    <button className="make-reservation-button" onClick={handleReserveClick}>RESERVE A CAGE NOW</button>
                </div>
                <div className="hero-image-container">
                    <img src={heroImage} alt="Batting Cage" data-aos="zoom-in"/>
                </div>
            </div>

            <div className="home-hook-container" data-aos="">
                <div className="hook-text-container">
                    <h2 className="hook-title">Discover the Thrill of Batting.</h2>
                    <p className="hook-subtitle">Step into the cage with state-of-the-art pitching machines and tracking technology.</p>
                </div>
                <div className="video-placeholder" data-aos="fade-left">
                    <video autoPlay loop muted>
                        <source src={battingVideo2} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            <div className="home-learn-more-container" data-aos="fade-up">
                <div className='learn-more-text'>
                    <p>Whether you're a rookie or a pro, a fun experience awaits you at Batting Blvd. Book cages, take lessons, host a team event, join a league, and more.</p>
                    <p>Reserve a batting cage for as low as $30/hr.</p>
                    <button className="home-learn-more-button" onClick={handleLearnMoreClick}>LEARN MORE</button>
                </div>
            </div>

            <div className="home-tutorial-container" data-aos="fade-up">
                <div className='reserve-button-container'>
                    <h2 className="tutorial-title">How it works</h2>
                    <p className="tutorial-subtitle">Find a Cage near you, reserve a cage, bring your own equipment or use ours, and play! All cages are contactless check-in.</p>
                    <button className="tutorial-button" onClick={handleReserveClick}>Lets play!</button>
                </div>
                <div className="video-placeholder">
                    <video autoPlay loop muted>
                        <source src={battingVideo1} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            <div className="home-image-container" data-aos="fade-up">
                <img src={homepage1} className="content-image left-image" alt='homepage1' />
                <img src={homepage2} className="content-image middle-image" alt='homepage2' />
                <img src={homepage3} className="content-image right-image" alt='homepage3' />
            </div>

            {/* <div className="home-container-5" data-aos="fade-left"> */}
            <div className="home-container-5" data-aos="fade-up">
                <div className='left-text'>
                    <h3>Spotlight:</h3>
                    <ul>
                        <li>8 Batting Cages</li>
                        <li>Multi-Purpose Practice and Warm up Areas</li>
                        <li>Advanced Pitching Machines</li>
                        <li>High Quality Equipment</li>
                    </ul>
                </div>
                <div className='right-text'>
                    <h3>Additional highlights:</h3>
                    <ul>
                        <li>Comfortable Spectator Areas</li>
                        <li>Professional Coaching</li>
                        <li>Membership Packages</li>
                        <li>Clean and Safe</li>
                        <li>Technology Integration</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;
