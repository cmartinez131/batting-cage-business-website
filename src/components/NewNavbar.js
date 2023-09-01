import { Link } from 'react-router-dom'
import '../styles.css'
import './navbar.css'
import logo from '../assets/logo.png'

const NewNavbar = () => {

    return (
        <nav className="new-nav">

            <Link className='title' to="/">
                <img src={logo} alt="Batting Blvd Logo" className="logo" />
                Batting Blvd
            </Link>
            <div className="dropdown">
                <button className="dropbtn">The Cage</button>
                <div className="dropdown-content">
                    <Link className='navLink' to="/about">About</Link>
                    <Link className='navLink' to="/features">What We Offer</Link>
                    <Link className='navLink' to="/how-it-works">How It Works</Link>
                    <Link className='navLink' to="/locations">Our Locations</Link>
                    <Link className='navLink' to="/blog">Blog</Link>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Adults</button>
                <div className="dropdown-content">
                    <Link className='navLink' to="/memberships">Memberships</Link>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Kids</button>
                <div className="dropdown-content">
                    <Link className='navLink' to="/memberships">Memberships</Link>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Pro Shop</button>
                <div className="dropdown-content">
                    <Link className='navLink' to="/pro-shop">Pro Shop</Link>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">About</button>
                <div className="dropdown-content">
                    <Link className='navLink' to="/about">About</Link>
                    <Link className='navLink' to="/mission">Our Mission</Link>
                </div>
            </div>
            <div className='loginButtons'>
                <Link className="button" to="/signup">Sign Up</Link>
                <Link className="button" to="/login">Log In</Link>
            </div>
        </nav>
    )
}

export default NewNavbar;
