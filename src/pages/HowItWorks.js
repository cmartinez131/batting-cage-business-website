import React, { useEffect } from 'react';
import './HowItWorks.css';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HowItWorks = () => {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init();
    }, []);

    const handleLetsPlayClick = () => {
        navigate('/book');
        window.scrollTo(0, 0);
    };

    return (
        <div className="how-it-works-container">
            <div className="header-section" style={{ backgroundImage: `url(https://populous.com/wp-content/uploads/2018/01/NYYMLBP_0122.jpg)` }}>
                <h1 className="cover-title">How it Works</h1>
            </div>

            <div className="steps-header">
                <h2>3-Easy Steps:</h2>
            </div>

            <div className="steps-section">
                <div className="step" data-aos="fade-up" data-aos-delay="200">
                    <div className="number-circle">1</div>
                    <h2 className='step-title'>Sign Up</h2>
                    <p className='step-description'>Create an account online</p>
                    <img src="https://static01.nyt.com/images/2021/05/17/sports/17mlb-yankees/17mlb-yankees-mediumSquareAt3X.jpg" alt="Sign Up" className="step-image" />
                </div>
                <div className="step" data-aos="fade-up" data-aos-delay="300">
                    <div className="number-circle">2</div>
                    <h2 className='step-title'>Reserve</h2>
                    <p className='step-description'>Book with a credit card to reserve your spot</p>
                    <img src="https://www.golfdigest.com/content/dam/images/golfdigest/fullset/2021/1/ShoheiOhtani_square.jpg" alt="Reserve" className="step-image" />
                </div>
                <div className="step" data-aos="fade-up" data-aos-delay="400">
                    <div className="number-circle">3</div>
                    <h2 className='step-title'>Play!</h2>
                    <p className='step-description'>Invite your friends and go hit</p>
                    <img src="https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkyMjkzMDYzNTIyMDAyNDc4/dcovjudge_h.jpg" alt="Play" className="step-image" />
                </div>
            </div>
            <div className="cta-section" data-aos="fade-up" data-aos-delay="200">
                <button className="cta-button" onClick={handleLetsPlayClick}>LET'S PLAY</button>
            </div>
        </div>
    );
}

export default HowItWorks;
