import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import NewNavbar from './components/NewNavbar'
import Body from './components/Body'

const App = () => {

  //initial user state is null meaning no user is logged in
  const [user, setUser] = useState(null);

  return (
    <>
      <Router>
        <Navbar />
        {/* <NewNavbar /> */}
        <Body />
        <Footer />
      </Router>
    </>

  )
}

export default App;
