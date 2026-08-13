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

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink text-txt">
      <Nav />
      <main>
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