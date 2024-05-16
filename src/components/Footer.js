import { Link, useNavigate } from 'react-router-dom';
import '../styles.css';
import './footer.css';
import logo from '../assets/logo.png';
import appstore from '../assets/app-store.png';
import instagram from '../assets/instagram.png';
import tiktok from '../assets/tiktok.png';
import facebook from '../assets/facebook.png';
import youtube from '../assets/youtube.png';
import twitter from '../assets/twitter.png';

const Footer = () => {
    const navigate = useNavigate();

    const handleNotifyMeClick = (e) => {
        e.preventDefault();
        console.log("email notified");
        navigate('/get-updates');
        window.scrollTo(0, 0);
    };

    const handleNavLinkClick = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className="footer-sections">
            <div className="footer-columns">
                <div className="first-column">
                    <img src={logo} alt="company logo" className="footer-logo"></img>
                    <p>Batting Blvd: Your one-stop destination for baseball fun and training. With self-serve batting cages and high-tech pitching machines, enjoy lessons, events, leagues, and more.</p>
                    <img src={appstore} alt="app store" className="app-store-button"></img>
                </div>
                <div className="second-column">
                    <h2>Resources</h2>
                    <ul>
                        <li><Link className='page-link' to="/get-updates" onClick={handleNavLinkClick}>Join Mailing List</Link></li>
                        <li><Link className='page-link' to="/about" onClick={handleNavLinkClick}>Terms of Use</Link></li>
                        <li><Link className='page-link' to="/about" onClick={handleNavLinkClick}>Club Policies</Link></li>
                        <li><Link className='page-link' to="/about" onClick={handleNavLinkClick}>Liability Waiver</Link></li>
                        <li><Link className='page-link' to="/about" onClick={handleNavLinkClick}>Privacy Policy</Link></li>
                        <li><Link className='page-link' to="/about" onClick={handleNavLinkClick}>Safety Policies</Link></li>
                    </ul>
                </div>
                <div className="third-column">
                    <h2>Contact Us</h2>
                    <ul>
                        <li>212-345-6789</li>
                        <li>917-598-7793</li>
                    </ul>
                    <h2>Locations</h2>
                    <ul>
                        <li>1774 Grove Street, Long Island City, New York 11101</li>
                        <li>2715 Church Street, Brooklyn, New York 11217</li>
                        <li>1084 Rainy Day Drive, Boston, MA 02199</li>
                    </ul>
                </div>
                <div className="fourth-column">
                    <h2>Keep the game going on social media</h2>
                    <img src={instagram} alt="instagram" className="social-media-button"></img>
                    <img src={tiktok} alt="tiktok" className="social-media-button"></img>
                    <img src={facebook} alt="facebook" className="social-media-button"></img>
                    <img src={youtube} alt="youtube" className="social-media-button"></img>
                    <img src={twitter} alt="twitter" className="social-media-button"></img>
                </div>
            </div>
            <hr />
            <div className="newsletter-container">
                <h2>Subscribe to our newsletter</h2>
                <p>The latest news, articles, and resources, sent to your inbox.</p>
                <form className="newsletter-form" onSubmit={handleNotifyMeClick}>
                    <input type="email" placeholder="Enter your email" className="newsletter-input" />
                    <button type="submit" className="newsletter-button">NOTIFY ME</button>
                </form>
            </div>
            <hr />
            <div className="footer-bottom">
                <p>© 2024 Batting Blvd. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
