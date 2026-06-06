import { useState } from 'react'
import { Container } from '../../ui/Container/Container'
import { SectionTag } from '../../ui/SectionTag/SectionTag'
import { GradientText } from '../../ui/GradientText/GradientText'
import { FAQ } from '../../../constants/faq'
import styles from './Faq.module.css'

function FaqItem({ item, delay }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`${styles.item} ${open ? styles.open : ''} reveal`} data-delay={delay}>
      <button className={styles.question} onClick={() => setOpen(!open)}>
        <span>{item.question}</span>
        <span className={styles.icon}>+</span>
      </button>
      <div className={styles.answer}>
        <p dangerouslySetInnerHTML={{ __html: item.answer }} />
      </div>
    </div>
  )
}

export function Faq() {
  return (
    <section className={styles.section} id="faq">
      <Container>
        <div className={`${styles.header} reveal`}>
          <SectionTag>// dúvidas frequentes</SectionTag>
          <h2 className={styles.title}>
            <GradientText variant="cool">FAQ</GradientText>
          </h2>
        </div>
        <div className={styles.list}>
          {FAQ.map((item, i) => (
            <FaqItem key={item.id} item={item} delay={Math.min(i + 1, 5)} />
          ))}
        </div>
      </Container>
    </section>
  )
}
