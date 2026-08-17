import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Innovation from './components/sections/Innovation'
import Research from './components/sections/Research'
import Journey from './components/sections/Journey'
import Credentials from './components/sections/Credentials'
import Explore from './components/sections/Explore'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'
import { Preloader, ParticleField, CursorGlow, ScrollProgress } from './components/fx'

export default function App() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    document.body.style.overflow = ready ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [ready])

  return (
    <div className="relative min-h-screen bg-ink text-txt">
      {!ready && <Preloader onComplete={() => setReady(true)} />}

      <CursorGlow />
      <ScrollProgress />

      <div className="fixed inset-0 -z-10">
        <ParticleField count={1200} radius={2.4} className="opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-ink" />
      </div>

      <Nav />
      <main className="relative">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Innovation />
        <Research />
        <Journey />
        <Credentials />
        <Explore />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}