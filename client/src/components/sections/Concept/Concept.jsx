import { Container } from '../../ui/Container/Container'
import { SectionTag } from '../../ui/SectionTag/SectionTag'
import { GradientText } from '../../ui/GradientText/GradientText'
import styles from './Concept.module.css'

const STATS = [
  { number: '2',  label: 'Dias de Conferência' },
  { number: '+10', label: 'Palestrantes Nacionais & Internacionais' },
  { number: '∞',  label: 'Capítulos Ainda Sendo Escritos' },
  { number: '1',  label: 'Geração em Movimento' },
]

export function Concept() {
  return (
    <section className={styles.section} id="sobre">
      <div className={styles.watermark} aria-hidden="true">ATOS 29</div>
      <Container>
        <div className={styles.grid}>
          <div className={`${styles.left} reveal`}>
            <SectionTag>// o conceito</SectionTag>
            <h2 className={styles.statement}>
              Mais do que<br />uma<br />
              <GradientText variant="warm">conferência</GradientText>
            </h2>
            <p>O livro de Atos termina no capítulo 28 — mas a história da Igreja não. A <strong>Awaken Conference</strong> nasce da convicção de que Deus continua escrevendo os próximos capítulos hoje, através de uma geração que acorda para o sobrenatural.</p>
            <p>Dois dias intensos de imersão, adoração, prédicas de alto nível e encontros que mudam vidas. Uma convocação para a geração que acredita que o melhor ainda está por vir.</p>

            <div className={styles.timeline}>
              <span className={styles.tlItem}>Passado</span>
              <div className={styles.tlArrow} />
              <span className={`${styles.tlItem} ${styles.tlActive}`}>Atos 28</span>
              <div className={styles.tlArrow} />
              <span className={`${styles.tlItem} ${styles.tlNext}`}>Atos 29 →</span>
            </div>
          </div>

          <div className={`${styles.right} reveal`}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.stat}>
                <div className={styles.statNumber}>{s.number}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
