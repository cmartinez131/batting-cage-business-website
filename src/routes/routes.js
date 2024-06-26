import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import HowItWorks from '../pages/HowItWorks';
import Memberships from '../pages/Memberships';
import ProShop from '../pages/ProShop';
import Book from '../pages/Book'
import Account from '../pages/Account.js'

const AppRoutes = () => (
    //each route links to a page that the body gets
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/pro-shop" element={<ProShop />} />
        <Route path="/memberships" element={<Memberships />} />
        <Route path="/book" element={<Book user={user} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/locations" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/get-updates" element={<GetUpdates />} />
        <Route path="/account" element={<Account />} />
        <Route path="/faq" element={<Faq />} />
        {/* terms */}
        {/* privact */}
    </Routes>
);

export default AppRoutes;