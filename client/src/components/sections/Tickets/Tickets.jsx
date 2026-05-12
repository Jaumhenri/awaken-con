import { Container } from '../../ui/Container/Container'
import { SectionTag } from '../../ui/SectionTag/SectionTag'
import { GradientText } from '../../ui/GradientText/GradientText'
import { Button } from '../../ui/Button/Button'
import { TICKETS } from '../../../constants/tickets'
import styles from './Tickets.module.css'

function TicketCard({ ticket }) {
  const { name, badge, description, price, installments, features, featured } = ticket

  return (
    <div className={`${styles.card} ${featured ? styles.featured : ''} reveal`}>
      {badge && <span className={styles.badge}>{badge}</span>}
      <p className={styles.name}>{name}</p>
      <p className={styles.desc}>{description}</p>

      <div className={styles.price}>
        <p className={styles.from}>A partir de</p>
        <p className={`${styles.amount} ${featured ? styles.amountGrad : ''}`}>
          R$<br />{price}
        </p>
        <p className={styles.installment}>
          ou {installments.count}× de R${installments.value.toFixed(2).replace('.', ',')}
        </p>
      </div>

      <ul className={styles.features}>
        {features.map((f) => <li key={f}>{f}</li>)}
      </ul>

      <Button href="#" variant={featured ? 'primary' : 'outline'} style={{ width: '100%', textAlign: 'center' }}>
        {featured ? 'Garantir Ingresso →' : 'Selecionar →'}
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
            Escolha seu<br />
            <GradientText variant="fire">ingresso</GradientText>
          </h2>
          <p className={styles.sub}>Garanta sua vaga — vagas limitadas por setor</p>
        </div>

        <div className={styles.grid}>
          {TICKETS.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      </Container>
    </section>
  )
}
