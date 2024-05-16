import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import '../styles.css';
import './navbar.css';
import logo from '../assets/logo.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ user }) => {
    const [activeDropdown, setActiveDropdown] = useState(''); // New state variable to manage active dropdown
    const navigate = useNavigate() // Use navigate with react-router to maintain page state

    const toggleDropdown = (dropdown) => {
        if (activeDropdown === dropdown) setActiveDropdown(''); // Close if already open
        else setActiveDropdown(dropdown); // Open the dropdown
    }

    const handleLogout = () => {
        auth.signOut().then(() => {
            navigate('/login'); // Redirect to login page after logout
            window.scrollTo(0, 0); // Scroll to the top on log out
        }).catch((error) => {

        });
    }

    const handleNavLinkClick = () => {
        window.scrollTo(0, 0);
    }

    return (
        <nav className="nav">
            <div className="title-and-logo-container">
                <Link className='title' to="/" onClick={handleNavLinkClick}>
                    <img src={logo} alt="Batting Blvd Logo" className="logo" />
                    <span>Batting Blvd</span>
                </Link>
            </div>

            <div className="navbar-items-container">


                <div className={`dropdown ${activeDropdown === 'cage' ? 'active' : ''}`}>
                    <button className="dropbtn" onClick={() => toggleDropdown('cage')}>The Cage</button>
                    <div className="dropdown-content">
                        <Link className='navLink' to="/features" onClick={handleNavLinkClick}>Features</Link>
                        <Link className='navLink' to="/how-it-works" onClick={handleNavLinkClick}>How It Works</Link>
                        <Link className='navLink' to="/locations" onClick={handleNavLinkClick}>Locations</Link>
                        <Link className='navLink' to="/faq" onClick={handleNavLinkClick}>FAQs</Link>
                    </div>
                </div>

                <div className={`dropdown ${activeDropdown === 'adults' ? 'active' : ''}`}>
                    <button className="dropbtn" onClick={() => toggleDropdown('adults')}>Programs</button>
                    <div className="dropdown-content">
                        <Link className='navLink' to="/memberships" onClick={handleNavLinkClick}>Adult Memberships</Link>
                        <Link className='navLink' to="/memberships" onClick={handleNavLinkClick}>Kids Memberships</Link>
                        <Link className='navLink' to="/memberships" onClick={handleNavLinkClick}>Kids Summer Camp</Link>
                        <Link className='navLink' to="/memberships" onClick={handleNavLinkClick}>Adult Leagues</Link>
                        <Link className='navLink' to="/memberships" onClick={handleNavLinkClick}>Private Coaching</Link>

                    </div>
                </div>

                {/* <div className={`dropdown ${activeDropdown === 'kids' ? 'active' : ''}`}>
                    <button className="dropbtn" onClick={() => toggleDropdown('kids')}>Kids</button>
                    <div className="dropdown-content">
                        <Link className='navLink' to="/memberships">Kids Memberships</Link>
                        <Link className='navLink' to="/memberships">Kids Summer Camp</Link>
                        <Link className='navLink' to="/memberships">Kids Private Coaching</Link>
                    </div>
                </div>
                 */}

                <div className={`dropdown ${activeDropdown === 'about' ? 'active' : ''}`}>
                    <button className="dropbtn" onClick={() => toggleDropdown('about')}>About</button>
                    <div className="dropdown-content">
                        <Link className='navLink' to="/about" onClick={handleNavLinkClick}>About Us</Link>
                        <Link className='navLink' to="/faq" onClick={handleNavLinkClick}>FAQs</Link>
                        <Link className='navLink' to="/blog" onClick={handleNavLinkClick}>Blog</Link>
                    </div>
                </div>
                <div className={`dropdown ${activeDropdown === 'proShop' ? 'active' : ''}`}>
                    <Link to="/pro-shop" onClick={handleNavLinkClick}>
                        <button className="dropbtn shopButton" onClick={() => toggleDropdown('proShop')}>Pro Shop</button>
                    </Link>
                    {/* <div className="dropdown-content">
                        <Link className='navLink' to="/pro-shop">Pro Shop</Link>
                    </div> */}
                </div>
            </div>

            <div className="action-buttons-container">
                <div className="bookingButton">
                    <Link className="button" to="/book" onClick={handleNavLinkClick}>Book a Cage</Link>
                </div>

                {/* Account/Login Button */}
                <div className='accountButton'>
                    {user ? (
                        <>
                            <Link className="button" to="/account" onClick={handleNavLinkClick}>Account</Link>
                            <button className="button" onClick={handleLogout}>Logout</button>
                        </>
                    ) : (
                        <Link className="button" to="/login">Account</Link>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
