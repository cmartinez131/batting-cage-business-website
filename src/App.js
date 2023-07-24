import {
  BrowserRouter as Router,
} from 'react-router-dom'

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Body from './components/Body'

const App = () => {

  return (
    <>
      <Router>
        <Navbar />
        <Body />
        <Footer />
      </Router>
    </>

  )
}

export default App
