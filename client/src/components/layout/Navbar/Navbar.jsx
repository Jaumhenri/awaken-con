import { useState, useRef, useLayoutEffect, useCallback } from 'react'
import { Container } from '../../ui/Container/Container'
import { MobileNav } from '../MobileNav/MobileNav'
import { useNavScroll } from '../../../hooks/useNavScroll'
import styles from './Navbar.module.css'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useNavScroll(60)
  const navRef = useRef(null)

  const syncNavHeight = useCallback(() => {
    if (!navRef.current) return
    const height = Math.ceil(navRef.current.getBoundingClientRect().height)
    document.documentElement.style.setProperty('--nav-height', `${height}px`)
  }, [])

  // Atualiza antes de qualquer paint quando a classe .scrolled muda de tamanho
  useLayoutEffect(syncNavHeight, [scrolled])

  // ResizeObserver como backup para resize de viewport e carregamento de fonte
  useLayoutEffect(() => {
    syncNavHeight()
    const ro = new ResizeObserver(syncNavHeight)
    if (navRef.current) ro.observe(navRef.current)
    return () => ro.disconnect()
  }, [])

  return (
    <>
      <nav ref={navRef} className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <Container>
          <div className={styles.inner}>
            <a href="#home" className={styles.logo}>
              <span className={styles.logoMain}>AWKN CON'26</span>
              <span className={styles.logoSub}>[ AWAKEN CONFERENCE ]</span>
            </a>

            <ul className={styles.links}>
              <li><a href="#ingressos">Ingressos</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>

            <a href="https://nextingresso.com.br/evento/awaken-conference-2026" target="_blank" rel="noopener noreferrer" className={styles.cta}>Garanta seu Ingresso →</a>

            <button
              className={styles.toggle}
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label="Menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </Container>
      </nav>

      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
