import { Container } from '../../ui/Container/Container'
import { useCountdown } from '../../../hooks/useCountdown'
import { EVENT } from '../../../constants/event'
import { PlasmaCanvas } from './PlasmaCanvas'
import styles from './Countdown.module.css'

function pad(n, len = 2) {
  return String(n).padStart(len, '0')
}

const UNITS = [
  { key: 'days',    label: 'Dias',     padLen: 3 },
  { key: 'hours',   label: 'Horas',    padLen: 2 },
  { key: 'minutes', label: 'Minutos',  padLen: 2 },
  { key: 'seconds', label: 'Segundos', padLen: 2 },
]

export function Countdown() {
  const timeLeft = useCountdown(EVENT.countdownTarget)

  return (
    <div className={styles.wrapper}>
      <Container>
        <p className={`${styles.label} reveal`}>// contagem regressiva para o evento</p>
      </Container>
      <div className={styles.section}>
        <PlasmaCanvas />
        <div className={styles.plasmaOverlay} />
        <Container className={styles.content}>
          <div className={styles.grid}>
            {UNITS.map(({ key, label, padLen }, i) => (
              <div key={key} className={`${styles.unit} reveal-scale`} data-delay={i + 1}>
                <div className={styles.count}>{pad(timeLeft[key], padLen)}</div>
                <div className={styles.unitLabel}>{label}</div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  )
}
