import { Container } from '../../ui/Container/Container'
import { SectionTag } from '../../ui/SectionTag/SectionTag'
import { GradientText } from '../../ui/GradientText/GradientText'
import styles from './Speakers.module.css'

const PLACEHOLDER_COUNT = 4
const GRAD_VARIANTS = ['cool', 'fire', 'warm', 'purple']

export function Speakers() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={`${styles.header} reveal`}>
          <SectionTag></SectionTag>
          <h2 className={styles.title}>
            <GradientText variant="warm">line-up</GradientText>
          </h2>
          <p className={styles.sub}></p>
        </div>

        <div className={`${styles.grid} reveal`}>
          {Array.from({ length: PLACEHOLDER_COUNT }, (_, i) => (
            <div key={i} className={styles.card}>
              <div className={`${styles.gradOverlay} ${styles[`grad${i}`]}`} />
              <div className={styles.placeholder}>✦</div>
              <p className={styles.revealText}>Em breve<br />revelado</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
