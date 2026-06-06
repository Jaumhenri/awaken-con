import { useRef } from 'react'
import { Container } from '../../ui/Container/Container'
import { SectionTag } from '../../ui/SectionTag/SectionTag'
import { GradientText } from '../../ui/GradientText/GradientText'
import styles from './Speakers.module.css'

const SPEAKERS = [
  { name: 'Pastor Duda',    photo: '/gallery/DSC00852.JPG',                                       pos: 'center top' },
  { name: 'Pastor Patrick', photo: '/gallery/WhatsApp Image 2026-06-06 at 01.25.50.jpeg', pos: 'center top' },
  { name: 'Pastor Oseias',  photo: '/gallery/WhatsApp Image 2026-06-06 at 01.28.47.jpeg' },
  { soon: true },
  { soon: true },
  { soon: true },
]

const GRAD = ['cool', 'fire', 'warm', 'purple']

export function Speakers() {
  const trackRef = useRef(null)

  function scroll(dir) {
    const track = trackRef.current
    if (!track) return
    const card = track.children[0]
    track.scrollBy({ left: dir * (card.offsetWidth + 16), behavior: 'smooth' })
  }

  return (
    <section className={styles.section}>
      <Container>
        <div className={`${styles.header} reveal`}>
          <SectionTag></SectionTag>
          <h2 className={styles.title}>
            <GradientText variant="warm">line-up</GradientText>
          </h2>
        </div>

        <div className={styles.sliderWrapper}>
          <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={() => scroll(-1)} aria-label="Anterior">‹</button>

          <div className={styles.track} ref={trackRef}>
            {SPEAKERS.map((speaker, i) =>
              speaker.soon ? (
                <div key={i} className={`${styles.card} ${styles.cardSoon}`}>
                  <div className={`${styles.gradOverlay} ${styles[`grad${i % 4}`]}`} />
                  <p className={styles.soonText}>Em breve<br />revelado</p>
                </div>
              ) : (
                <div key={speaker.name} className={`${styles.card} reveal-scale`} data-delay={i + 1}>
                  <img className={`${styles.photo} ${speaker.zoom ? styles.photoZoom : ''}`} src={speaker.photo} alt={speaker.name} style={speaker.pos ? { objectPosition: speaker.pos } : undefined} />
                  <div className={styles.nameOverlay}>
                    <p className={styles.name}>{speaker.name}</p>
                  </div>
                </div>
              )
            )}
          </div>

          <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={() => scroll(1)} aria-label="Próximo">›</button>
        </div>
      </Container>
    </section>
  )
}
