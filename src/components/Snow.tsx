import { useEffect, useRef } from 'react'

type Flake = { x: number; y: number; r: number; speed: number; drift: number; phase: number }

// Full-viewport snowfall drawn on a canvas behind the content
export default function Snow({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx || !active) return

    let width = 0
    let height = 0
    let flakes: Flake[] = []
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.round((width * height) / 9000)
      flakes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2.2 + 0.6,
        speed: Math.random() * 0.6 + 0.3,
        drift: Math.random() * 0.6 + 0.2,
        phase: Math.random() * Math.PI * 2,
      }))
    }

    let frame = 0
    const tick = (t: number) => {
      ctx.clearRect(0, 0, width, height)
      // Faint blue outline keeps flakes visible against the white snowfield sections
      ctx.fillStyle = 'rgba(255,255,255,0.9)'
      ctx.strokeStyle = 'rgba(110,130,180,0.35)'
      ctx.lineWidth = 0.6
      for (const f of flakes) {
        f.y += f.speed * (1 + f.r * 0.3)
        f.x += Math.sin(t / 1600 + f.phase) * f.drift * 0.4
        if (f.y > height + 4) {
          f.y = -4
          f.x = Math.random() * width
        }
        ctx.beginPath()
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2)
        ctx.fill()
        ctx.stroke()
      }
      frame = requestAnimationFrame(tick)
    }

    resize()
    window.addEventListener('resize', resize)
    frame = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      ctx.clearRect(0, 0, width, height)
    }
  }, [active])

  return <canvas ref={canvasRef} className="snow" aria-hidden />
}
