import { useScrollReveal } from './hooks/useScrollReveal'
import { Navbar }    from './components/layout/Navbar/Navbar'
import { Marquee }   from './components/sections/Marquee/Marquee'
import { Footer }    from './components/layout/Footer/Footer'
import { Hero }      from './components/sections/Hero/Hero'
import { Concept }   from './components/sections/Concept/Concept'
import { Countdown } from './components/sections/Countdown/Countdown'
import { Gallery }   from './components/sections/Gallery/Gallery'
import { Speakers }  from './components/sections/Speakers/Speakers'
import { Tickets }   from './components/sections/Tickets/Tickets'
import { Faq }       from './components/sections/Faq/Faq'
import { FooterCta } from './components/sections/FooterCta/FooterCta'

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
        <Speakers />
        <Tickets />
        <Faq />
        <FooterCta />
      </main>
      <Footer />
    </>
  )
}
