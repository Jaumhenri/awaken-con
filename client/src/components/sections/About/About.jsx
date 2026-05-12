import { Container } from '../../ui/Container/Container'
import { SectionTag } from '../../ui/SectionTag/SectionTag'
import { GradientText } from '../../ui/GradientText/GradientText'
import { Button } from '../../ui/Button/Button'
import styles from './About.module.css'

const VALUES = [
  { icon: '⚡', name: 'Futuro' },
  { icon: '🌊', name: 'Movimento' },
  { icon: '🔥', name: 'Intensidade' },
  { icon: '🌐', name: 'Expansão' },
  { icon: '🏙',  name: 'Urbano' },
  { icon: '✦',  name: 'Espiritualidade' },
]

export function About() {
  return (
    <section className={styles.section}>
      <div className={styles.glow} />
      <Container>
        <div className={styles.inner}>
          <div className={`${styles.content} reveal`}>
            <SectionTag>// sobre a awaken</SectionTag>
            <h2 className={styles.title}>
              Uma geração<br />
              <GradientText variant="warm">desperta</GradientText>
            </h2>
            <p>A Awaken Conference nasce de uma convicção: que Deus está levantando uma geração que não se contenta com o passado. Uma geração que entende que o livro de Atos não acabou no capítulo 28.</p>
            <p>Com direção criativa contemporânea, palestrantes que vivem o que pregam e uma atmosfera de genuína presença de Deus, a AWKN CON é o encontro anual que marca vidas e lança pessoas para seus próximos capítulos.</p>
            <div className={styles.cta}>
              <Button href="#ingressos" variant="primary">Faça Parte →</Button>
            </div>
          </div>

          <div className={`${styles.values} reveal`}>
            {VALUES.map((v) => (
              <div key={v.name} className={styles.valueItem}>
                <div className={styles.vIcon}>{v.icon}</div>
                <div className={styles.vName}>{v.name}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
