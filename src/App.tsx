import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Snow from './components/Snow'
import Altimeter from './components/Altimeter'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { profile } from './data'

const SNOW_KEY = 'snow'

function initialSnow() {
  try {
    const saved = localStorage.getItem(SNOW_KEY)
    if (saved !== null) return saved === '1'
  } catch {
    // storage unavailable; fall through to the default
  }
  return !window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export default function App() {
  const [snow, setSnow] = useState(initialSnow)

  useEffect(() => {
    try {
      localStorage.setItem(SNOW_KEY, snow ? '1' : '0')
    } catch {
      // not persisted; harmless
    }
  }, [snow])

  return (
    <>
      <Snow active={snow} />
      <Nav snow={snow} onToggleSnow={() => setSnow(!snow)} />
      <Altimeter />
      <Hero />
      <main>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <svg className="footer-range" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden>
          <path d="M0 120 V70 L120 40 L230 75 L380 20 L520 80 L650 35 L800 90 L960 30 L1100 85 L1260 45 L1440 80 V120Z" />
        </svg>
        <p>© {new Date().getFullYear()} {profile.name}</p>
      </footer>
    </>
  )
}
