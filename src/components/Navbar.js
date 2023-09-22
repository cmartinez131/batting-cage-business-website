import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import '../styles.css';
import './navbar.css';
import logo from '../assets/logo.png';
import { useState } from 'react'; // Import useState

const Navbar = ({ user }) => {
    const [activeDropdown, setActiveDropdown] = useState(''); // New state variable to manage active dropdown

    const toggleDropdown = (dropdown) => {
        if (activeDropdown === dropdown) setActiveDropdown(''); // Close if already open
        else setActiveDropdown(dropdown); // Open the dropdown
    }

    return (
        <nav className="nav">
            <Link className='title' to="/">
                <img src={logo} alt="Batting Blvd Logo" className="logo" />
                Batting Blvd
            </Link>

            <div className={`dropdown ${activeDropdown === 'cage' ? 'active' : ''}`}>
                <button className="dropbtn" onClick={() => toggleDropdown('cage')}>The Cage</button>
                <div className="dropdown-content">
                    <Link className='navLink' to="/about">About</Link>
                    <Link className='navLink' to="/features">What We Offer</Link>
                    <Link className='navLink' to="/how-it-works">How It Works</Link>
                    <Link className='navLink' to="/locations">Our Locations</Link>
                    <Link className='navLink' to="/blog">Blog</Link>
                </div>
            </div>

            {/* Similar modifications for other dropdowns */}
            <div className={`dropdown ${activeDropdown === 'adults' ? 'active' : ''}`}>
                <button className="dropbtn" onClick={() => toggleDropdown('adults')}>Adults</button>
                <div className="dropdown-content">
                    <Link className='navLink' to="/memberships">Memberships</Link>
                </div>
            </div>

            <div className={`dropdown ${activeDropdown === 'kids' ? 'active' : ''}`}>
                <button className="dropbtn" onClick={() => toggleDropdown('kids')}>Kids</button>
                <div className="dropdown-content">
                    <Link className='navLink' to="/memberships">Memberships</Link>
                </div>
            </div>

            <div className={`dropdown ${activeDropdown === 'proShop' ? 'active' : ''}`}>
                <button className="dropbtn" onClick={() => toggleDropdown('proShop')}>Pro Shop</button>
                <div className="dropdown-content">
                    <Link className='navLink' to="/pro-shop">Pro Shop</Link>
                </div>
            </div>

            <div className={`dropdown ${activeDropdown === 'about' ? 'active' : ''}`}>
                <button className="dropbtn" onClick={() => toggleDropdown('about')}>About</button>
                <div className="dropdown-content">
                    <Link className='navLink' to="/about">About</Link>
                    <Link className='navLink' to="/mission">Our Mission</Link>
                </div>
            </div>

            <div className='loginButtons'>
                {user ? (
                    <>
                        <span>{user.email}</span>
                        <button className="button" onClick={() => auth.signOut()}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link className="button" to="/signup">Sign Up</Link>
                        <Link className="button" to="/login">Log In</Link>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
