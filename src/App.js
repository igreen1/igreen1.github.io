import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import HomePage from './pages/Home/HomePage'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

//love this website
//https://brittanychiang.com/

//https://designcode.io/react-hooks-toggle-menu-with-usestate

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
