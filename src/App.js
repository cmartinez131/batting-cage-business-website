import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Body from './components/Body';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listener for user authentication status changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser ? currentUser : null);
    });

    // Cleanup on component unmount
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const navbar = document.querySelector('.nav');
    const adjustBodyPadding = () => {
      const navbarHeight = navbar.offsetHeight;
      document.body.style.paddingTop = `${navbarHeight}px`;
    };

    // Create a ResizeObserver to observe changes in navbar size
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        adjustBodyPadding();
      }
    });

    // Start observing the navbar
    resizeObserver.observe(navbar);

    // Ensure padding is adjusted on initial mount and window resize as well
    adjustBodyPadding();
    window.addEventListener('resize', adjustBodyPadding);

    // Cleanup function for resize observer and event listener
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', adjustBodyPadding);
    };
  }, []);

  return (
    <>
      <Router>
        <Navbar user={user} />
        <Body user={user} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
