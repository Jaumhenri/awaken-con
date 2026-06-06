import { useEffect, useRef } from 'react'
import styles from './Countdown.module.css'

export function PlasmaCanvas() {
  const cvRef = useRef(null)

  useEffect(() => {
    const cv = cvRef.current
    if (!cv) return
    const ctx = cv.getContext('2d')
    const W = cv.width, H = cv.height
    const img = ctx.createImageData(W, H)
    const data = img.data

    const stops = [
      [0.00, [10, 9, 8]],
      [0.12, [8, 14, 70]],
      [0.30, [12, 32, 140]],
      [0.45, [0, 64, 255]],
      [0.62, [40, 130, 240]],
      [0.78, [60, 160, 255]],
      [0.92, [90, 190, 255]],
      [1.00, [140, 210, 255]],
    ]
    const LUT = new Uint8ClampedArray(1024 * 3)
    for (let i = 0; i < 1024; i++) {
      const t = i / 1023
      let c = stops[stops.length - 1][1]
      for (let j = 0; j < stops.length - 1; j++) {
        const [t0, c0] = stops[j], [t1, c1] = stops[j + 1]
        if (t >= t0 && t <= t1) {
          const k = (t - t0) / (t1 - t0 || 1)
          c = [c0[0] + (c1[0] - c0[0]) * k, c0[1] + (c1[1] - c0[1]) * k, c0[2] + (c1[2] - c0[2]) * k]
          break
        }
      }
      LUT[i * 3] = c[0]; LUT[i * 3 + 1] = c[1]; LUT[i * 3 + 2] = c[2]
    }

    const TAU = Math.PI * 2
    let elapsed = 0
    let lastFrame = performance.now()
    let rafId

    function frame(now) {
      const dt = (now - lastFrame) / 1000
      lastFrame = now
      elapsed += dt

      const T = elapsed
      const cols = 4
      const flow = T * 0.06
      const bandY = 0.5 + Math.sin(T * 0.5) * 0.06
      const breathe = 0.75 + Math.sin(T * 0.7) * 0.20

      let p = 0
      for (let y = 0; y < H; y++) {
        const v = y / (H - 1)
        const band = Math.exp(-Math.pow((v - bandY) * 2.4, 2)) * breathe
        const scan = 0.5 + 0.5 * Math.sin(v * H * 0.6 + T * 4)

        for (let x = 0; x < W; x++) {
          const u = x / (W - 1)
          const phase = (u + flow) * TAU * cols + Math.cos(v * TAU * 0.5 + T * 0.3) * 0.35
          const cyl = Math.sin(phase) * 0.5 + 0.5
          const edge = Math.pow(cyl, 4) * 0.4
          const shimmer = 0.5 + 0.5 * Math.sin(phase + T * 2.2 + v * 8)

          let k = Math.pow(cyl, 0.8) * (0.7 + band * 0.9) + edge * shimmer * 0.5
          k *= 0.88 + scan * 0.12
          if (k < 0) k = 0; else if (k > 1) k = 1
          const idx = (k * 1023) | 0
          const li = idx * 3
          data[p++] = LUT[li]
          data[p++] = LUT[li + 1]
          data[p++] = LUT[li + 2]
          data[p++] = 255
        }
      }

      ctx.putImageData(img, 0, 0)
      rafId = requestAnimationFrame(frame)
    }

    rafId = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <canvas
      ref={cvRef}
      width={320}
      height={180}
      className={styles.plasmaCanvas}
    />
  )
}
