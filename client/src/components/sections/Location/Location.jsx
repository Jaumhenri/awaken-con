import { Container } from '../../ui/Container/Container'
import styles from './Location.module.css'

export function Location() {
  return (
    <div className={`${styles.band} reveal`}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.info}>
            <p className={styles.tag}>// local do evento</p>
            <h3>Gravataí / RS</h3>
            <p className={styles.sub}>[ AWKN/CON &nbsp;·&nbsp; Brasil ]</p>
          </div>
          <div className={styles.dates}>
            <div className={styles.dateBig}>OUT<br />'26</div>
            <div className={styles.dateLabel}>Outubro · 2026</div>
          </div>
        </div>
      </Container>
    </div>
  )
}
