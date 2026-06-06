import { useRef, useEffect } from 'react'
import { Container } from '../../ui/Container/Container'
import { GradientText } from '../../ui/GradientText/GradientText'
import styles from './Gallery.module.css'

const ITEMS = [
  { id: 1, src: '/gallery/IMG_9357.MOV', type: 'video', label: 'Abertura · 2025' },
  { id: 2, src: '/gallery/IMG_9356.MOV', type: 'video', label: 'Louvor · 2025' },
  { id: 3, src: '/gallery/IMG_9355.MOV', type: 'video', label: 'Prédica · 2025' },
  { id: 4, src: '/gallery/IMG_9361.MOV', type: 'video', label: 'Sala Profética · 2025' },
  { id: 5, src: '/gallery/IMG_9360.MOV', type: 'video', label: 'Encerramento · 2025' },
  { id: 6, src: '/gallery/IMG_9358.MOV', type: 'video', label: 'Comunidade · 2025' },
]

export function Gallery() {
  const gridRef = useRef(null)

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return
    let timer

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          grid.classList.add(styles.assembling)
          timer = setTimeout(() => {
            grid.classList.remove(styles.assembling)
            grid.classList.add(styles.done)
          }, 1900)
          observer.disconnect()
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px 100px 0px' }
    )

    observer.observe(grid)
    return () => { observer.disconnect(); clearTimeout(timer) }
  }, [])

  return (
    <section className={styles.section}>
      <Container>
        <div className={`${styles.header} reveal`}>
          <h2 className={styles.title}>
            O que o senhor<br />
            <GradientText variant="fire">está fazendo</GradientText>
          </h2>
        </div>

        <div ref={gridRef} className={styles.grid}>
          {ITEMS.map((item) => (
            <div
              key={item.id}
              className={`${styles.item} ${styles[`item${item.id}`]} ${!item.src ? styles[`bg${item.id}`] : ''}`}
            >
              {item.type === 'video' && item.src ? (
                <video
                  className={styles.media}
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : item.src ? (
                <img className={styles.media} src={item.src} alt={item.label} />
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
