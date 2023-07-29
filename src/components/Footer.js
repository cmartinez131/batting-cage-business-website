import { Link } from 'react-router-dom';
import '../styles.css'
import './footer.css'
import logo from '../assets/logo.png'
import appstore from '../assets/app-store.png'
import instagram from '../assets/instagram.png'
import tiktok from '../assets/tiktok.png'
import facebook from '../assets/facebook.png'
import youtube from '../assets/youtube.png'
import twitter from '../assets/twitter.png'

const Footer = () => {
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
                        <li><Link className='page-link footer-a' to="/about">Resources</Link></li>
                        <li><Link className='page-link' to="/about">Terms of Use</Link></li>
                        <li><Link className='page-link' to="/about">Club Policies</Link></li>
                        <li><Link className='page-link' to="/about">Liability Waive</Link></li>
                        <li><Link className='page-link' to="/about">Privacy Policy</Link></li>
                        <li><Link className='page-link' to="/about">Safety Policies</Link></li>
                        <li><Link className='page-link' to="/about">Join Mailing List</Link></li>
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
            <div className="footer-bottom">
                <p>© 2023 Batting Blvd. All rights reserved.</p>
            </div>
        </div>
    );
}


export default Footer;