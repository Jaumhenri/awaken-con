import { Container } from '../../ui/Container/Container'
import { SectionTag } from '../../ui/SectionTag/SectionTag'
import { GradientText } from '../../ui/GradientText/GradientText'
import { Button } from '../../ui/Button/Button'
import { BATCHES } from '../../../constants/tickets'
import styles from './Tickets.module.css'

function parseDate(value, { endOfDay = false } = {}) {
  if (!value) return null

  if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
    const [year, month, day] = value.split('-').map(Number)
    return new Date(year, month - 1, day, endOfDay ? 23 : 0, endOfDay ? 59 : 0, endOfDay ? 59 : 0, endOfDay ? 999 : 0)
  }

  return new Date(value)
}

function getBatchStatus(batch, allBatches) {
  const now = new Date()
  const batchDeadline = batch.deadline ? parseDate(batch.deadline, { endOfDay: true }) : null
  const batchStart = batch.startsAt ? parseDate(batch.startsAt) : null

  if (batchDeadline && batchDeadline < now) return 'sold-out'
  if (!batch.deadline && !batch.startsAt) return 'upcoming'
  if (batchStart && batchStart > now) return 'upcoming'

  const activeBatch = allBatches.find((candidate) => {
    if (!candidate.deadline && !candidate.startsAt) return false

    const candidateDeadline = candidate.deadline ? parseDate(candidate.deadline, { endOfDay: true }) : null
    const candidateStart = candidate.startsAt ? parseDate(candidate.startsAt) : null

    if (candidateDeadline && candidateDeadline < now) return false
    if (candidateStart && candidateStart > now) return false

    return true
  })

  return batch.id === activeBatch?.id ? 'active' : 'upcoming'
}

function BatchCard({ batch, status, delay }) {
  const isActive = status === 'active'
  const isSoldOut = status === 'sold-out'

  const now = new Date()
  const shouldRevealPrice = !batch.priceHiddenAt || now >= parseDate(batch.priceHiddenAt)
  const displayPriceValue = shouldRevealPrice && typeof batch.actualPrice === 'number' ? batch.actualPrice : batch.price
  const isPlaceholder = typeof displayPriceValue !== 'number'
  const formattedPrice = isPlaceholder ? displayPriceValue : displayPriceValue.toFixed(2).replace('.', ',')
  const installmentValue = isPlaceholder ? displayPriceValue : (displayPriceValue / 3).toFixed(2).replace('.', ',')

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
  const now = new Date()
  const switchStart = new Date(2026, 6, 7, 0, 0, 0, 0)
  const orderedBatches = [...BATCHES].sort((a, b) => {
    const isSwitchActive = now >= switchStart

    if (!isSwitchActive) {
      if (a.id === 'lote-1' && b.id === 'lancamento') return -1
      if (a.id === 'lancamento' && b.id === 'lote-1') return 1
      return (a.displayOrder ?? 0) - (b.displayOrder ?? 0)
    }

    if (a.id === 'lancamento' && b.id === 'lote-1') return -1
    if (a.id === 'lote-1' && b.id === 'lancamento') return 1

    return (a.displayOrder ?? 0) - (b.displayOrder ?? 0)
  })

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
          {orderedBatches.map((batch, i) => (
            <BatchCard
              key={batch.id}
              batch={batch}
              status={getBatchStatus(batch, orderedBatches)}
              delay={i + 1}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
