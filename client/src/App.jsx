import { useScrollReveal } from './hooks/useScrollReveal'
import { Navbar }    from './components/layout/Navbar/Navbar'
import { Footer }    from './components/layout/Footer/Footer'
import { Hero }      from './components/sections/Hero/Hero'
import { Marquee }   from './components/sections/Marquee/Marquee'
import { Concept }   from './components/sections/Concept/Concept'
import { Countdown } from './components/sections/Countdown/Countdown'
import { Location }  from './components/sections/Location/Location'
import { Gallery }   from './components/sections/Gallery/Gallery'
import { Speakers }  from './components/sections/Speakers/Speakers'
import { Tickets }   from './components/sections/Tickets/Tickets'
import { Kit }       from './components/sections/Kit/Kit'
import { Faq }       from './components/sections/Faq/Faq'
import { About }     from './components/sections/About/About'
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
        <Location />
        <Gallery />
        <Speakers />
        <Tickets />
        <Kit />
        <Faq />
        <About />
        <FooterCta />
      </main>
      <Footer />
    </>
  )
}
