import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Body from './components/Body'

const App = () => {

  // Initial user state is null meaning no user is logged in
  const [user, setUser] = useState(null);

  // Helper function to adjust body component padding for dynamic navbar sizing
  const adjustBodyPadding = () => {
    const navbar = document.querySelector('.nav'); // Adjust the selector as needed
    const navbarHeight = navbar.offsetHeight;
    document.body.style.paddingTop = `${navbarHeight}px`;
  };

  useEffect(() => {
    // Set up a listener for changes in user authentication status
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    // Adjust the boddy padding on mount and on window resize
    adjustBodyPadding();
    window.addEventListener('resize', adjustBodyPadding);

    // Cleanup function for both the auth listener and resize event listener
    return () => {
      unsubscribe();
      window.removeEventListener('resize', adjustBodyPadding);
    }
  }, []);

  return (
    <>
      <Router>
        <Navbar user={user} />
        <Body user={user} />
        <Footer />
      </Router>
    </>

  )
}

export default App;
