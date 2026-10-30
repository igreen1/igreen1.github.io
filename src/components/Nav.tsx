import { useEffect, useState } from 'react'
import { profile } from '../data'
import { TrailMark, type Difficulty } from './TrailMark'

export const SECTIONS: { id: string; label: string; mark: Difficulty }[] = [
  { id: 'about', label: 'About', mark: 'green' },
  { id: 'experience', label: 'Experience', mark: 'blue' },
  { id: 'projects', label: 'Projects', mark: 'black' },
  { id: 'contact', label: 'Lodge', mark: 'lodge' },
]

type Props = { snow: boolean; onToggleSnow: () => void }

export default function Nav({ snow, onToggleSnow }: Props) {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    // Highlight whichever section occupies the middle of the viewport
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'nav-solid' : ''} ${open ? 'nav-open' : ''}`}>
      <a className="brand" href="#top" onClick={() => setOpen(false)}>
        <svg viewBox="0 0 32 20" aria-hidden><path d="M1 19 L11 4 L16 11 L21 6 L31 19Z" /></svg>
        {profile.name}
      </a>
      <button className="menu-btn" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen(!open)}>
        <span /><span /><span />
      </button>
      <ul>
        {SECTIONS.map((s) => (
          <li key={s.id}>
            <a href={`#${s.id}`} className={active === s.id ? 'active' : ''} onClick={() => setOpen(false)}>
              <TrailMark kind={s.mark} size={12} />
              {s.label}
            </a>
          </li>
        ))}
        <li>
          <button className="snow-toggle" onClick={onToggleSnow} aria-pressed={snow} title="Toggle snowfall">
            <svg viewBox="0 0 24 24" aria-hidden>
              <path d="M12 2v20M3.3 7l17.4 10M3.3 17L20.7 7M9 4l3 2 3-2M9 20l3-2 3 2" />
            </svg>
            <span>{snow ? 'Snow on' : 'Snow off'}</span>
          </button>
        </li>
      </ul>
    </nav>
  )
}
