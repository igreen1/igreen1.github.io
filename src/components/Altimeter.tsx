import { useEffect, useState } from 'react'

const SUMMIT = 3962
const BASE = 2480

// Fixed gauge that "descends" the mountain as the visitor scrolls down the page
export default function Altimeter() {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0)
      // Stay out of the way until the visitor has left the hero
      setVisible(window.scrollY > window.innerHeight * 0.6)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const elevation = Math.round(SUMMIT - (SUMMIT - BASE) * progress)

  return (
    <aside className={`altimeter ${visible ? 'altimeter-on' : ''}`} aria-hidden>
      <span className="alt-label">Summit</span>
      <div className="alt-track">
        <div className="alt-fill" style={{ height: `${progress * 100}%` }} />
        <div className="alt-marker" style={{ top: `${progress * 100}%` }}>
          <span>{elevation.toLocaleString()} m</span>
        </div>
      </div>
      <span className="alt-label">Base</span>
    </aside>
  )
}
