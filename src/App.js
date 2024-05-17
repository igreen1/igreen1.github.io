import React, {useRef} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.scss';
import Homepage from './pages/Homepage'
import FunHomepage from './pages/FunHomepage'
import Navbar from './components/Navbar'
import Stars from './components/Stars'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

function App() {
  const app_ref = useRef(null)
  return (
    <div className="App" ref={app_ref}>
      <Stars app_ref={app_ref}/>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/fun' component={<FunHomepage/>} />
        </Routes>
        <AppOverlay />
      </Router>
    </div>
  );
}

const AppOverlay = () => {
  return (<React.Fragment className='Overlay'>
    <div className="LeftBar">
      <li>
        <button className="OverlayButton">
          <a href={'https://github.com/igreen1'} className="InlineLink">
            <FaGithub />
          </a>
        </button>
      </li>
      <li>
        <button className="OverlayButton">
          <a
            href={'https://www.linkedin.com/in/ian-green2/'}
            className="InlineLink"
          >
            <FaLinkedinIn />
          </a>
        </button>
      </li>
      <li className="VerticalLine" />
    </div>
    <div className="RightBar">
      <li>
        <a href="mailto:me@iangreen.dev" className="Email InlineLink">
          me@iangreen.dev
        </a>
      </li>
      <li className="VerticalLine" style={{ width: '8px' }} />
    </div>
  </React.Fragment>)
}

export default App;
