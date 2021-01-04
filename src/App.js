import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Retro from './pages/Retro'

import './funStyles/weather.css'
import './funStyles/rave.css'
import ElectricalEngineering from './pages/ElectricalEngineering'

//love this website
//https://brittanychiang.com/

//https://designcode.io/react-hooks-toggle-menu-with-usestate

function App() {
  const [weather, setWeather] = React.useState('')
  const [rave, setRave] = React.useState(false)
  const toggleRave = () => {
    if (!rave && window.confirm('Warning EPILEPSY: Click OK to continue'))
      setRave(!rave)
    else if (rave) setRave(!rave)
  }

  //TODO
  const [retro, setRetro] = React.useState(false)
  const toggleRetro = () => {
    setRetro(!retro)
  }

  const setRainOrSnow = (newWeather) => {
    if (newWeather === weather) setWeather('')
    else if (newWeather === 'rain') setWeather('rain')
    else if (newWeather === 'snow') setWeather('snow')
  }

  if (retro) return <Retro toggleRetro={toggleRetro} />

  return (
    <div
      className={`App ${rave ? 'rave' : ''} ${
        weather !== '' ? `weather ${weather}` : ''
      } ${retro ? 'retro' : ''}`}
    >
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/ee" component={ElectricalEngineering} />
        </Switch>
        <Footer
          setWeather={setRainOrSnow}
          toggleRave={toggleRave}
          toggleRetro={toggleRetro}
        />
      </Router>
    </div>
  )
}

export default App
