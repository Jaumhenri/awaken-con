import { Container } from '../../ui/Container/Container'
import { SectionTag } from '../../ui/SectionTag/SectionTag'
import { GradientText } from '../../ui/GradientText/GradientText'
import { Button } from '../../ui/Button/Button'
import { BATCHES } from '../../../constants/tickets'
import styles from './Tickets.module.css'

function parseDeadline(deadline) {
  if (!deadline) return null

  if (typeof deadline === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(deadline)) {
    const [year, month, day] = deadline.split('-').map(Number)
    return new Date(year, month - 1, day, 23, 59, 59, 999)
  }

  return new Date(deadline)
}

function getBatchStatus(batch, allBatches) {
  const now = new Date()
  const batchDeadline = batch.deadline ? parseDeadline(batch.deadline) : null

  if (batchDeadline && batchDeadline < now) return 'sold-out'

  const hasEarlierActive = allBatches.some((b) => {
    if (b.id === batch.id || !b.deadline) return false

    const otherDeadline = parseDeadline(b.deadline)
    return otherDeadline && otherDeadline < batchDeadline && otherDeadline >= now
  })

  return hasEarlierActive ? 'upcoming' : 'active'
}

function BatchCard({ batch, status, delay }) {
  const isActive = status === 'active'
  const isSoldOut = status === 'sold-out'

  const isPlaceholder = typeof batch.price !== 'number'
  const formattedPrice = isPlaceholder ? batch.price : batch.price.toFixed(2).replace('.', ',')
  const installmentValue = isPlaceholder ? batch.price : (batch.price / 3).toFixed(2).replace('.', ',')

  return (
    <div className={`${styles.card} ${isActive ? styles.featured : ''} ${isSoldOut ? styles.soldOut : ''} reveal-scale`} data-delay={delay}>
      {isActive && <span className={styles.badge}>⚡ Disponível agora</span>}

      <p className={styles.name}>{batch.name}</p>
      <p className={styles.deadlineLabel}>{batch.deadlineLabel}</p>

      <div className={styles.price}>
        <p className={styles.from}>por apenas</p>
        <p className={`${styles.amount} ${isActive ? styles.amountGrad : ''}`}>
          {isPlaceholder ? formattedPrice : `R$ ${formattedPrice}`}
        </p>
        {!isPlaceholder && <p className={styles.installment}>ou 3× de R${installmentValue}</p>}
      </div>

      <div style={{ flex: 1 }} />

      <Button
        href="https://nextingresso.com.br/evento/awaken-conference-2026"
        target="_blank"
        rel="noopener noreferrer"
        variant={isActive ? 'primary' : 'outline'}
        style={{ width: '100%', textAlign: 'center', opacity: isSoldOut ? 0.4 : 1, pointerEvents: !isActive ? 'none' : 'auto' }}
      >
        {isActive ? 'Garantir Ingresso →' : isSoldOut ? 'Esgotado' : 'Em breve'}
      </Button>
    </div>
  )
}

export function Tickets() {
  return (
    <section className={styles.section} id="ingressos">
      <Container>
        <div className={`${styles.header} reveal`}>
          <SectionTag>// ingressos</SectionTag>
          <h2 className={styles.title}>
            Garanta seu<br />
            <GradientText variant="fire">ingresso</GradientText>
          </h2>
        </div>

        <div className={styles.grid}>
          {BATCHES.map((batch, i) => (
            <BatchCard
              key={batch.id}
              batch={batch}
              status={getBatchStatus(batch, BATCHES)}
              delay={i + 1}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
