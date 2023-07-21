import { Link } from 'react-router-dom';
import '../styles.css'

const Footer = () => {
    return (
        <div id="footer-sections">
            <h1>This is the footer</h1>
            <Link to="/about">About</Link>
            <Link className='navLink' to="/mission">Our Mission</Link>
            <p>© 2023 Batting Blvd. All rights reserved.</p>
        </div>
    );
}

export default Footer;