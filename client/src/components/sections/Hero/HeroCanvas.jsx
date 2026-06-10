import { useEffect, useRef } from 'react'

const SCALE         = window.innerWidth < 768 ? 9 : 5
const BLEND_SAMPLES = 5

const NODES = [
  { bx: 0.02, by: 0.02, ax: 0.12, ay: 0.10, fx: 0.29, fy: 0.31, r: 0.55, color: '#0022ff' },
  { bx: 0.98, by: 0.02, ax: 0.11, ay: 0.13, fx: 0.37, fy: 0.23, r: 0.55, color: '#6600cc' },
  { bx: 0.50, by: 0.50, ax: 0.16, ay: 0.13, fx: 0.43, fy: 0.41, r: 0.50, color: '#cc00cc' },
  { bx: 0.02, by: 0.98, ax: 0.13, ay: 0.11, fx: 0.51, fy: 0.37, r: 0.55, color: '#ff0066' },
  { bx: 0.98, by: 0.98, ax: 0.10, ay: 0.14, fx: 0.33, fy: 0.47, r: 0.55, color: '#ff5500' },
  { bx: 0.50, by: 0.05, ax: 0.14, ay: 0.09, fx: 0.61, fy: 0.29, r: 0.42, color: '#ff2200' },
]

export function HeroCanvas() {
  const canvasRef = useRef(null)
  const mouse     = useRef(null)          // null = not yet on canvas
  const sm        = useRef({ x: 0, y: 0, vx: 0, vy: 0 })
  const raf       = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx  = canvas.getContext('2d')
    const src  = document.createElement('canvas')
    const sctx = src.getContext('2d')

    let W = 0, H = 0, sw = 0, sh = 0
    let dst = null

    function setSize() {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      if (!w || !h) return
      W = canvas.width = w
      H = canvas.height = h
      sw = Math.ceil(w / SCALE)
      sh = Math.ceil(h / SCALE)
      src.width  = sw
      src.height = sh
      dst = new ImageData(sw, sh)
    }

    const ro = new ResizeObserver(setSize)
    ro.observe(canvas)

    function onMove(e) {
      const r = canvas.getBoundingClientRect()
      const x = e.clientX - r.left
      const y = e.clientY - r.top
      if (!mouse.current) {
        // First entry: snap smooth mouse instantly so effect is immediate
        sm.current.x  = x
        sm.current.y  = y
        sm.current.vx = 0
        sm.current.vy = 0
      }
      mouse.current = { x, y }
    }
    window.addEventListener('mousemove', onMove, { passive: true })

    function drawSource(t) {
      sctx.fillStyle = '#050505'
      sctx.fillRect(0, 0, sw, sh)
      const maxDim = Math.max(sw, sh)
      for (const n of NODES) {
        const cx = (n.bx + Math.sin(t * n.fx) * n.ax) * sw
        const cy = (n.by + Math.cos(t * n.fy) * n.ay) * sh
        const cr = n.r * maxDim
        const g  = sctx.createRadialGradient(cx, cy, 0, cx, cy, cr)
        g.addColorStop(0,    n.color)
        g.addColorStop(0.45, n.color + 'aa')
        g.addColorStop(1,    'rgba(0,0,0,0)')
        sctx.globalAlpha = 0.95
        sctx.fillStyle   = g
        sctx.fillRect(0, 0, sw, sh)
      }
      sctx.globalAlpha = 1
    }

    function frame(ts) {
      if (!dst) { setSize(); raf.current = requestAnimationFrame(frame); return }

      const t = ts * 0.001
      const s = sm.current
      const m = mouse.current

      let mx = -999, my = -999
      let speed = 0, nvx = 0, nvy = 0, smear = 0

      if (m) {
        const prevX = s.x, prevY = s.y
        s.x += (m.x - s.x) * 0.14
        s.y += (m.y - s.y) * 0.14

        const rawVx = s.x - prevX
        const rawVy = s.y - prevY
        s.vx += (rawVx - s.vx) * 0.3
        s.vy += (rawVy - s.vy) * 0.3

        speed = Math.hypot(s.vx, s.vy)
        nvx   = speed > 0.1 ? s.vx / speed : 0
        nvy   = speed > 0.1 ? s.vy / speed : 0
        smear = Math.min(speed * 14, 200) / SCALE

        mx = s.x / SCALE
        my = s.y / SCALE
      }

      drawSource(t)
      const srcPx = sctx.getImageData(0, 0, sw, sh)
      const sd    = srcPx.data
      const dd    = dst.data

      const radius = 500 / SCALE
      const ampX   = 30  / SCALE
      const ampY   = 24  / SCALE

      for (let y = 0; y < sh; y++) {
        for (let x = 0; x < sw; x++) {
          // Autonomous wave — always active
          const wx = Math.sin(x * 0.26 + t * 0.5 + y * 0.14) * ampX
                   + Math.sin(x * 0.12 + t * 0.28)            * ampX * 0.35
          const wy = Math.cos(y * 0.21 + t * 0.4 + x * 0.12) * ampY
                   + Math.cos(y * 0.10 + t * 0.22)            * ampY * 0.35

          const di = (y * sw + x) * 4

          if (m && smear > 0.5) {
            const dx      = x - mx
            const dy      = y - my
            const dist    = Math.hypot(dx, dy)
            const falloff = Math.max(0, 1 - dist / radius) ** 2

            if (falloff > 0.005) {
              // Multi-sample blend along movement direction
              let r = 0, g = 0, b = 0
              for (let i = 0; i < BLEND_SAMPLES; i++) {
                const frac = (i / (BLEND_SAMPLES - 1) - 0.5) * 2  // -1..+1
                const bx   = wx + frac * smear * falloff * nvx
                const by_  = wy + frac * smear * falloff * nvy
                const sx   = Math.min(sw - 1, Math.max(0, Math.round(x + bx)))
                const sy   = Math.min(sh - 1, Math.max(0, Math.round(y + by_)))
                const si   = (sy * sw + sx) * 4
                r += sd[si]; g += sd[si + 1]; b += sd[si + 2]
              }
              dd[di]     = r / BLEND_SAMPLES
              dd[di + 1] = g / BLEND_SAMPLES
              dd[di + 2] = b / BLEND_SAMPLES
              dd[di + 3] = 255
              continue
            }
          }

          // Default: wave only
          const sx = Math.min(sw - 1, Math.max(0, Math.round(x + wx)))
          const sy = Math.min(sh - 1, Math.max(0, Math.round(y + wy)))
          const si = (sy * sw + sx) * 4
          dd[di]     = sd[si]
          dd[di + 1] = sd[si + 1]
          dd[di + 2] = sd[si + 2]
          dd[di + 3] = 255
        }
      }

      sctx.putImageData(dst, 0, 0)
      ctx.imageSmoothingEnabled = true
      ctx.imageSmoothingQuality = 'medium'
      ctx.drawImage(src, 0, 0, W, H)

      raf.current = requestAnimationFrame(frame)
    }

    raf.current = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf.current)
      ro.disconnect()
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
    />
  )
}
