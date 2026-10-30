import { useEffect, useRef } from 'react'
import { profile } from '../data'

// Pine tree positions along the foreground slope: [x, baseY, height]
const TREES: [number, number, number][] = [
  [40, 560, 70], [85, 552, 54], [120, 560, 80], [1250, 545, 66], [1290, 552, 84],
  [1335, 548, 58], [1380, 556, 76], [1420, 550, 60], [200, 566, 46], [1180, 556, 44],
]

function Tree({ x, y, h }: { x: number; y: number; h: number }) {
  const w = h * 0.42
  return (
    <g className="tree">
      <polygon points={`${x},${y - h} ${x - w},${y - h * 0.3} ${x + w},${y - h * 0.3}`} />
      <polygon points={`${x},${y - h * 0.75} ${x - w * 1.2},${y} ${x + w * 1.2},${y}`} />
    </g>
  )
}

export default function Hero() {
  const layers = useRef<(SVGGElement | null)[]>([])

  // Parallax: farther ranges lag behind the page scroll; the foreground slope stays put so it meets the content below
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const speeds = [0.45, 0.3, 0.15, 0]
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, window.innerHeight)
        layers.current.forEach((el, i) => el?.setAttribute('transform', `translate(0 ${y * speeds[i]})`))
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <header className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="trail-dot" aria-hidden /> Washington, DC
        </p>
        <h1>{profile.name}</h1>
        <p className="tagline">{profile.tagline}</p>
        <p className="intro">{profile.intro}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#experience">See my experience</a>
          <a className="btn btn-ghost" href={profile.resume} target="_blank" rel="noreferrer">Résumé (PDF)</a>
        </div>
      </div>

      <svg className="range" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMax slice" aria-hidden>
        <defs>
          <linearGradient id="peakLight" x1="0" x2="1">
            <stop offset="0" stopColor="#fbd3c0" />
            <stop offset="1" stopColor="#ffffff" />
          </linearGradient>
        </defs>
        <g ref={(el) => { layers.current[0] = el }}>
          <path className="ridge r1" d="M0 380 L120 300 L210 340 L330 220 L420 290 L520 200 L640 280 L760 170 L880 260 L980 210 L1100 300 L1220 230 L1340 290 L1440 250 V600 H0Z" />
        </g>
        <g ref={(el) => { layers.current[1] = el }}>
          <path className="ridge r2" d="M0 450 L140 330 L240 400 L380 270 L470 330 L600 240 L720 350 L860 290 L990 380 L1120 260 L1260 360 L1440 310 V600 H0Z" />
          <path fill="url(#peakLight)" opacity=".75" d="M1120 260 L1084 290 L1100 286 L1112 298 L1126 285 L1150 283Z" />
        </g>
        <g ref={(el) => { layers.current[2] = el }}>
          <path className="ridge r3" d="M0 520 L200 420 L330 470 L520 260 L640 150 L760 270 L900 360 L1040 300 L1200 430 L1440 380 V600 H0Z" />
          <path fill="url(#peakLight)" d="M560 223 L640 150 L720 230 L700 226 L682 246 L660 228 L640 244 L618 226 L596 240Z" />
          <path fill="url(#peakLight)" opacity=".85" d="M1004 318 L1040 300 L1080 328 L1060 324 L1046 336 L1030 326Z" />
        </g>
        <g ref={(el) => { layers.current[3] = el }}>
          <path className="slope" d="M0 600 V520 Q360 450 720 525 T1440 490 V600Z" />
          {/* Fresh ski tracks carving down the slope */}
          <path className="ski-track" d="M760 540 C700 535 820 548 760 560 S700 580 770 600" />
          <path className="ski-track" d="M772 540 C712 535 832 548 772 560 S712 580 782 600" />
          {TREES.map(([x, y, h]) => <Tree key={`${x}-${y}`} x={x} y={y} h={h} />)}
        </g>
      </svg>
    </header>
  )
}
