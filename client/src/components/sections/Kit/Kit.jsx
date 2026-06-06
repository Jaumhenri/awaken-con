import { Container } from '../../ui/Container/Container'
import { SectionTag } from '../../ui/SectionTag/SectionTag'
import { GradientText } from '../../ui/GradientText/GradientText'
import { Button } from '../../ui/Button/Button'
import { KIT } from '../../../constants/kit'
import styles from './Kit.module.css'

export function Kit() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.visual} aria-hidden="true">
            {KIT.items.map((item, i) => (
              <div key={item.name} className={`${styles.box} reveal-scale`} data-delay={i + 1}>
                <div className={styles.boxIcon}>{item.icon}</div>
                <div className={styles.boxText}>
                  <strong>{item.name}</strong>
                  <span>{item.detail}</span>
                </div>
              </div>
            ))}
          </div>

          <div className={`${styles.content} reveal`}>
            <SectionTag>// kit especial</SectionTag>
            <h2 className={styles.title}>
              Leve a<br />
              <GradientText variant="fire">conferência</GradientText><br />
              com você
            </h2>
            <p>O Kit AWKN CON'26 foi pensado para potencializar sua experiência. Itens exclusivos desta edição, disponíveis apenas em quantidade limitada.</p>
            <div className={styles.pricing}>
              <span className={styles.priceOld}>R${KIT.priceOld}</span>
              <span className={styles.priceNew}>R${KIT.priceNew}</span>
              <span className={styles.save}>Economize R${KIT.priceOld - KIT.priceNew}</span>
            </div>
            <Button href="#ingressos" variant="primary">Adicionar ao Ingresso →</Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
