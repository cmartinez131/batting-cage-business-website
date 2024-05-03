import './home.css';
import homepage1 from '../assets/homepage1.png';
import homepage2 from '../assets/homepage2.png';
import homepage3 from '../assets/homepage3.png';
import homepage4 from '../assets/homepage4.png';
import cages from '../assets/features/image2.png'
import battingVideo1 from '../assets/battingvideo1.mp4'
import battingVideo2 from '../assets/battingvideo2.mp4'
import { useNavigate } from 'react-router-dom'
import heroImage from '../assets/battinghero1.png';

const Home = () => {
    const navigate = useNavigate();

    const handleReserveClick = () => {
        navigate('/book');
    }

    const handleLearnMoreClick = () => {
        navigate('features');
    }

    return (
        <div className="home">
            {/* <div className="home-cover-image">
                <h1 className="cover-title">Batting Blvd</h1>
            </div> */}

            <div className="hero-container">
                <div className="hero-text-container">
                    <h1 className="hero-title">The future of batting cages.</h1>
                    <button className="make-reservation-button" onClick={handleReserveClick}>RESERVE A CAGE NOW</button>
                </div>
                <div className="hero-image-container">
                    <img src={heroImage} alt="Batting Cage" />
                </div>
            </div>

            <div className="home-hook-container">
                <div className="hook-text-container">
                    <h2 className="hook-title">Discover the Thrill of Batting.</h2>
                    <p className="hook-subtitle">Step into the cage with state-of-the-art pitching machines and tracking technology.</p>
                </div>
                <div className="video-placeholder">
                    <video autoPlay loop muted>
                        <source src={battingVideo2} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div className="home-learn-more-container">
                <div className='learn-more-text'>
                        <p>Whether you're a rookie or a pro, an unforgettable experience awaits you at Batting Blvd. Book cages, take lessons, host a team event, join a league, and more.</p>
                        <p>Reserve a batting cage for as low as $30/hr.</p>
                        <button className="home-learn-more-button" onClick={handleLearnMoreClick}>LEARN MORE</button>
                    </div>
            </div>

            <div className="home-tutorial-container">
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

            {/* <div className="home-intro-container">
                <div className='reserve-button-container'>
                    <p>Swing into the Future at The Cage: Your Ultimate Batting Destination.</p>
                    <button className="reserve-button" onClick={handleReserveClick}>RESERVE NOW</button>

                </div>
                <div className="video-placeholder">
                    <video autoPlay loop muted>
                        <source src={battingVideo1} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div> */}


            {/* <div className="home-container-3">
                <div className='container-3-text'>
                    <p>Whether you're a rookie or a seasoned pro, an unforgettable experience awaits you at Batting Blvd. Book cages, take lessons, host a team event, join a league, and more.</p>
                    <p>Reserve a batting cage for as low as $30/hr. Swing by Batting Blvd and let's hit it out of the park!</p>
                    <button className="learn-more-button" onClick={handleLearnMoreClick}>LEARN MORE</button>
                </div>
            </div> */}

            <div className="home-image-container">
                <img src={homepage1} className="content-image left-image" alt='homepage1' />
                <img src={homepage2} className="content-image middle-image" alt='homepage2' />
                <img src={homepage3} className="content-image right-image" alt='homepage3' />
            </div>
            
            <div className="home-container-5">
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
            {/* <div className="home-container-6">
                <img src={homepage4} alt='homepage4' />
                <div>
                    <h2>How it works:</h2>
                    <ol>
                        <li>Visit the Website or Download the App</li>
                        <li>Choose Your Cage and Time</li>
                        <li>Book a Cage</li>
                        <li>Payment</li>
                        <li>Confirmation</li>
                        <li>Arrive and Bat</li>
                    </ol>
                </div>
            </div> */}
        </div>
    )
}

export default Home;