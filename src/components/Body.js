import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import HowItWorks from '../pages/HowItWorks';
import Mission from '../pages/Mission';
import Memberships from '../pages/Memberships';
import ProShop from '../pages/ProShop';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Features from '../pages/Features';
import Locations from '../pages/Locations';
import Blog from '../pages/Blog';
import '../styles.css'

const Body = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/pro-shop" element={<ProShop />} />
            <Route path="/memberships" element={<Memberships />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/features" element={<Features />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/blog" element={<Blog />} />
        </Routes>
    );
}

export default Body;