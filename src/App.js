import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import Footer from './components/Footer'
import Navbar from './components/Navbar'
// import NewNavbar from './components/NewNavbar'
import Body from './components/Body'

const App = () => {

  //initial user state is null meaning no user is logged in
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe(); // Cleanup subscription
  }, []);

  return (
    <>
      <Router>
        <Navbar user={user}/>
        {/* <NewNavbar /> */}
        <Body user={user}/>
        <Footer />
      </Router>
    </>

  )
}

export default App;
