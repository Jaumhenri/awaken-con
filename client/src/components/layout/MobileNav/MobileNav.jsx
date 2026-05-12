import styles from './MobileNav.module.css'

export function MobileNav({ open, onClose }) {
  const handleLink = () => onClose()

  return (
    <div className={`${styles.overlay} ${open ? styles.open : ''}`}>
      <button className={styles.close} onClick={onClose} aria-label="Fechar menu">✕</button>
      <a href="#ingressos" onClick={handleLink}>Ingressos</a>
      <a href="#sobre"     onClick={handleLink}>Sobre</a>
      <a href="#faq"       onClick={handleLink}>FAQ</a>
      <a href="#ingressos" onClick={handleLink} className={styles.ctaLink}>
        Garanta seu Ingresso
      </a>
    </div>
  )
}
