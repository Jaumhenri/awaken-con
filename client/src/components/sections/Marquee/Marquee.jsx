import { useRef, useLayoutEffect } from 'react'
import styles from './Marquee.module.css'

const ITEMS = [
  { text: 'Awaken Conference', accent: false },
  { text: '·', accent: true },
  { text: 'Atos 29', accent: false },
  { text: '·', accent: true },
  { text: 'Gravataí/RS', accent: false },
  { text: '·', accent: true },
  { text: 'Outubro 2026', accent: false },
  { text: '·', accent: true },
  { text: "AWKN CON'26", accent: false },
  { text: '·', accent: true },
]

export function Marquee() {
  const wrapperRef = useRef(null)

  useLayoutEffect(() => {
    const sync = () => {
      if (!wrapperRef.current) return
      const height = Math.ceil(wrapperRef.current.getBoundingClientRect().height)
      document.documentElement.style.setProperty('--marquee-height', `${height}px`)
    }
    sync()
    const ro = new ResizeObserver(sync)
    if (wrapperRef.current) ro.observe(wrapperRef.current)
    return () => ro.disconnect()
  }, [])

  // 4 repetitions per half garante que cada metade supera qualquer viewport
  const half = Array.from({ length: 4 }, () => ITEMS).flat()
  const track = [...half, ...half]

  return (
    <div ref={wrapperRef} className={styles.wrapper} aria-hidden="true">
      <div className={styles.track}>
        {track.map((item, i) => (
          <span key={i} className={`${styles.item} ${item.accent ? styles.accent : ''}`}>
            {item.text}
          </span>
        ))}
      </div>
    </div>
  )
}
