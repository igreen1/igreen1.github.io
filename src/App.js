import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.scss';
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Homepage} />
        </Switch>
        <AppOverlay />
      </Router>
    </div>
  );
}

const AppOverlay = () => {
  return ( <React.Fragment className='Overlay'>
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
        <a href="mailto:iangreen2.00@gmail.com" className="Email InlineLink">
          iangreen2.00@gmail.com
          </a>
      </li>
      <li className="VerticalLine" style={{ width: '8px' }} />
    </div>
  </React.Fragment>)
}

export default App;
