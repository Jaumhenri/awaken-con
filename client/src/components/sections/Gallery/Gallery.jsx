import { useRef, useEffect } from 'react'
import { Container } from '../../ui/Container/Container'
import { GradientText } from '../../ui/GradientText/GradientText'
import styles from './Gallery.module.css'

// Para adicionar fotos reais: coloque os arquivos em client/public/gallery/
// e defina src: '/gallery/nome-do-arquivo.jpg' em cada item.
const ITEMS = [
  { id: 1, src: null, label: 'Abertura · 2025' },
  { id: 2, src: null, label: 'Louvor · 2025' },
  { id: 3, src: null, label: 'Prédica · 2025' },
  { id: 4, src: null, label: 'Sala Profética · 2025' },
  { id: 5, src: null, label: 'Encerramento · 2025' },
  { id: 6, src: null, label: 'Comunidade · 2025' },
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
          // delay máximo (0.38s) + duração (0.6s) + margem
          timer = setTimeout(() => {
            grid.classList.remove(styles.assembling)
            grid.classList.add(styles.done)
          }, 1900)
          observer.disconnect()
        }
      },
      { threshold: 0.6 }
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
              className={`${styles.item} ${styles[`item${item.id}`]} ${styles[`bg${item.id}`]}`}
              style={item.src ? { backgroundImage: `url(${item.src})` } : undefined}
            >
              <div className={styles.overlay}>
                <span className={styles.overlayLabel}>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
