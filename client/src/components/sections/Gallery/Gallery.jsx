import { Container } from '../../ui/Container/Container'
import { GradientText } from '../../ui/GradientText/GradientText'
import styles from './Gallery.module.css'

const ITEMS = [
  { bg: styles.bg1, label: 'Abertura · 2025' },
  { bg: styles.bg2, label: 'Louvor · 2025' },
  { bg: styles.bg3, label: 'Prédica · 2025' },
  { bg: styles.bg4, label: 'Sala Profética · 2025' },
  { bg: styles.bg5, label: 'Encerramento · 2025' },
  { bg: styles.bg6, label: 'Comunidade · 2025' },
]

export function Gallery() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={`${styles.header} reveal`}>
          <h2 className={styles.title}>
            O que nossa geração<br />
            <GradientText variant="fire">tem vivido</GradientText>
          </h2>
          <p>Momentos da edição anterior — veja o que Deus fez em 2025</p>
        </div>

        <div className={`${styles.grid} reveal`}>
          {ITEMS.map((item, i) => (
            <div key={i} className={styles.item}>
              <div className={`${styles.itemBg} ${item.bg}`} />
              <div className={styles.play}>▶</div>
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
