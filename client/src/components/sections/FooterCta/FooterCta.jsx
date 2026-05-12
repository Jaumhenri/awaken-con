import { Container } from '../../ui/Container/Container'
import { Button } from '../../ui/Button/Button'
import styles from './FooterCta.module.css'

export function FooterCta() {
  return (
    <div className={styles.wrapper}>
      <Container className="reveal">
        <p className={styles.tag}>// não fique de fora</p>
        <h2 className={styles.title}>
          <span className={styles.line1}>Seu capítulo</span>
          <span className={styles.line2}>começa aqui.</span>
        </h2>
        <Button href="#ingressos" variant="primary" style={{ fontSize: '20px', padding: '20px 56px' }}>
          Garanta seu Ingresso →
        </Button>
      </Container>
    </div>
  )
}
