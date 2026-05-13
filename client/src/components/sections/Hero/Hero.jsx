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
        <p className={styles.meta}>[ AWKN/CON &nbsp;·&nbsp; 10.2026 &nbsp;·&nbsp; GRAVATAÍ/RS &nbsp;·&nbsp; BR ]</p>
        <h1 className={styles.title}>
          <GradientText variant="warm" as="span" className={styles.line1}>Awaken</GradientText>
          <span className={styles.line2}>Conference</span>
        </h1>
        <p className={styles.tagline}>
          A igreja não terminou em <em>Atos 28</em>.<br />
          Os próximos capítulos estão sendo escritos <em>agora</em>.
        </p>
        <div className={styles.ctas}>
          <Button href="#ingressos" variant="primary">Garanta seu Ingresso →</Button>
          <Button href="#sobre"     variant="outline">Saiba Mais</Button>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span>scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
