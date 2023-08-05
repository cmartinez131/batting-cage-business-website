import './home.css';
import homepage1 from '../assets/homepage1.png';
import homepage2 from '../assets/homepage2.png';
import homepage3 from '../assets/homepage3.png';
import homepage4 from '../assets/homepage4.png';

const Home = () => {
    return (
        <div className="home">
            <div className="home-cover-image">
                <h1 className="cover-title">Batting Blvd</h1>
            </div>
            <div className="home-intro-container">
                <div className='reserve-button-container'>
                    <p>Swing into the Future at The Cage: Your Ultimate Batting Destination.</p>
                    <button className="reserve-button">RESERVE NOW</button>
                </div>
                <div className="video-placeholder">
                    Video of people playing
                </div>
            </div>
            <div className="home-container-3">
                <div className='container-3-text'>
                    <p>Whether you're a rookie or a seasoned pro, an unforgettable experience awaits you at Batting Blvd. Book cages, take lessons, host a team event, join a league, and more.</p>
                    <p>Reserve a batting cage for as low as $30/hr. Swing by Batting Blvd and let's hit it out of the park!</p>
                    <button className="learn-more-button">LEARN MORE</button>
                </div>
            </div>
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
            <div className="home-container-6">
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
            </div>
        </div>
    )
}

export default Home;