import './App.css'
import React from 'react'
import { Router, Route, Link } from 'react-router-dom'
import LandingPage from './pages/HomePage'
import { createBrowserHistory as createHistory } from 'history'
import TopBar from './TopBar'

const history = createHistory()

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <TopBar />
        <Route path="/" exact component={LandingPage} />
      </Router>
    </div>
  )
}

export default App
