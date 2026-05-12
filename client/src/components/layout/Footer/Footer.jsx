import { Container } from '../../ui/Container/Container'
import styles from './Footer.module.css'

const SOCIAL_ICONS = {
  Instagram: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  ),
  YouTube: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.13C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.56A3.02 3.02 0 0 0 .5 6.19 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.13C4.46 20.5 12 20.5 12 20.5s7.54 0 9.38-.56a3.02 3.02 0 0 0 2.12-2.13A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.81zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
    </svg>
  ),
  TikTok: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.77 1.52V6.73a4.85 4.85 0 0 1-1-.04z"/>
    </svg>
  ),
}

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoGrad}>AWKN</span>
              <br />
              <span className={styles.logoSub}>CON'26</span>
            </div>
            <p>A igreja não terminou em Atos 28. Os próximos capítulos estão sendo escritos agora — e você é parte deles.</p>
            <div className={styles.social}>
              {Object.entries(SOCIAL_ICONS).map(([name, icon]) => (
                <a key={name} href="#" className={styles.socialBtn} aria-label={name}>{icon}</a>
              ))}
            </div>
          </div>

          <div className={styles.col}>
            <h4>Evento</h4>
            <ul>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#ingressos">Ingressos</a></li>
              <li><a href="#">Programação</a></li>
              <li><a href="#">Palestrantes</a></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Informações</h4>
            <ul>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#">Política de Privacidade</a></li>
              <li><a href="#">Termos de Uso</a></li>
              <li><a href="#">Acessibilidade</a></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Contato</h4>
            <ul>
              <li><a href="mailto:contato@awakencon.com.br">contato@awakencon.com.br</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Gravataí · RS · BR</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 Awaken Conference — Todos os direitos reservados.</p>
          <p className={styles.meta}>[ AWKN/CON &nbsp;·&nbsp; 10.2026 &nbsp;·&nbsp; GRAVATAÍ/RS &nbsp;·&nbsp; BR ]</p>
        </div>
      </Container>
    </footer>
  )
}
