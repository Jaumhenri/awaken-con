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
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div className={styles.wrapper} aria-hidden="true">
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={i} className={`${styles.item} ${item.accent ? styles.accent : ''}`}>
            {item.text}
          </span>
        ))}
      </div>
    </div>
  )
}
