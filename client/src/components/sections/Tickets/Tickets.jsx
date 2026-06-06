import { Container } from '../../ui/Container/Container'
import { SectionTag } from '../../ui/SectionTag/SectionTag'
import { GradientText } from '../../ui/GradientText/GradientText'
import { Button } from '../../ui/Button/Button'
import { BATCHES } from '../../../constants/tickets'
import styles from './Tickets.module.css'

function getBatchStatus(batch, allBatches) {
  const now = new Date()
  const batchDeadline = batch.deadline ? new Date(batch.deadline) : Infinity

  if (batch.deadline && batchDeadline < now) return 'sold-out'

  const hasEarlierActive = allBatches.some(
    (b) => b.id !== batch.id && b.deadline && new Date(b.deadline) < batchDeadline && new Date(b.deadline) >= now
  )

  return hasEarlierActive ? 'upcoming' : 'active'
}

function BatchCard({ batch, status }) {
  const isActive = status === 'active'
  const isSoldOut = status === 'sold-out'

  const isPlaceholder = typeof batch.price !== 'number'
  const formattedPrice = isPlaceholder ? batch.price : batch.price.toFixed(2).replace('.', ',')
  const installmentValue = isPlaceholder ? batch.price : (batch.price / 3).toFixed(2).replace('.', ',')

  return (
    <div className={`${styles.card} ${isActive ? styles.featured : ''} ${isSoldOut ? styles.soldOut : ''} reveal`}>
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
          {BATCHES.map((batch) => (
            <BatchCard
              key={batch.id}
              batch={batch}
              status={getBatchStatus(batch, BATCHES)}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
