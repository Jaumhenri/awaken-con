import { Container } from '../../ui/Container/Container'
import { SectionTag } from '../../ui/SectionTag/SectionTag'
import { GradientText } from '../../ui/GradientText/GradientText'
import styles from './Concept.module.css'

const STATS = [
  { number: '2',  label: 'Dias de Conferência' },
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
            <h2 className={styles.statement}>
              O despertar<br />de uma
              <GradientText variant="warm"> geração</GradientText>
            </h2>
            <p>Desde os primórdios a igreja do Senhor nunca parou. A história foi marcada por grandes homens e mulheres, que se levantaram por estarem cansados de apenas ler sobre os Atos dos Apóstolos <strong>e não vivê-los.</strong> Nossa oração é que o mover de Deus não passe por nós sem que o percebamos. <h3><br></br>Desperte nossa geração Senhor. <br></br>Queremos fazer parte do que o Senhor está fazendo.</h3><br></br>Você está disposto a se levantar como eles? <br></br>A pagar o preço da oração, da leitura, e do sacrifício?<br></br> Para que sua geração contemple a glória que eles contemplaram?<br></br> A história não parou em Atos 28.Deus continua agindo. A pergunta é: <br></br> <h3>Você fará parte do próximo capítulo?</h3> </p>
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
