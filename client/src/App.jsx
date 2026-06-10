import { lazy, Suspense } from 'react'
import { useScrollReveal } from './hooks/useScrollReveal'
import { Navbar }    from './components/layout/Navbar/Navbar'
import { Marquee }   from './components/sections/Marquee/Marquee'
import { Footer }    from './components/layout/Footer/Footer'
import { Hero }      from './components/sections/Hero/Hero'
import { Concept }   from './components/sections/Concept/Concept'
import { Countdown } from './components/sections/Countdown/Countdown'
import { Gallery }   from './components/sections/Gallery/Gallery'

const Speakers  = lazy(() => import('./components/sections/Speakers/Speakers').then(m => ({ default: m.Speakers })))
const Tickets   = lazy(() => import('./components/sections/Tickets/Tickets').then(m => ({ default: m.Tickets })))
const Faq       = lazy(() => import('./components/sections/Faq/Faq').then(m => ({ default: m.Faq })))
const FooterCta = lazy(() => import('./components/sections/FooterCta/FooterCta').then(m => ({ default: m.FooterCta })))

export default function App() {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Concept />
        <Countdown />
        <Gallery />
        <Suspense fallback={null}>
          <Speakers />
          <Tickets />
          <Faq />
          <FooterCta />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
