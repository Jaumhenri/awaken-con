import { Button } from '../../ui/Button/Button'
import { GradientText } from '../../ui/GradientText/GradientText'
import { HeroCanvas } from './HeroCanvas'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.bg}>
        <HeroCanvas />
        <div className={`${styles.blob} ${styles.blob1}`} />
        <div className={`${styles.blob} ${styles.blob2}`} />
        <div className={`${styles.blob} ${styles.blob3}`} />
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          <GradientText variant="warm" as="span" className={styles.line1}>Awaken</GradientText>
          <span className={styles.line2}>Conference</span>
        </h1>
        <p className={styles.tagline}>
          A história não parou em <em>Atos 28.</em><br></br><em>Deus continua agindo.</em>
        </p>
        <div className={styles.ctas}>
          <Button href="https://nextingresso.com.br/evento/awaken-conference-2026" target="_blank" rel="noopener noreferrer" variant="primary">Garanta seu Ingresso →</Button>
          <Button href="#sobre"     variant="outline">Saiba Mais</Button>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span>role para conhecer mais</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
