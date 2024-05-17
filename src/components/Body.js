import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import HowItWorks from '../pages/HowItWorks';
import Memberships from '../pages/Memberships';
import ProShop from '../pages/ProShop';
import Faq from '../pages/Faq.js'
import Book from '../pages/Book';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Features from '../pages/Features';
import Locations from '../pages/Locations';
import Blog from '../pages/Blog';
import GetUpdates from '../pages/GetUpdates';
import Account from '../pages/Account.js'
import UserProfile from '../pages/UserProfile';
import '../styles.css'

const Body = ({ user }) => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/pro-shop" element={<ProShop />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/memberships" element={<Memberships />} />
            <Route path="/book" element={<Book user={user} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/features" element={<Features />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/get-updates" element={<GetUpdates />} />
            <Route path="/account" element={<Account /> } />
            <Route path="/profile" element={<UserProfile user={user} />} />
        </Routes>
    );
}

export default Body;