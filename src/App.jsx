import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Hub from './components/Hub'
import Contact from './components/Contact'
import Footer from './components/Footer'

// The page is just these sections stacked in order.
// To reorder or remove a section, move or delete its line here.
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Hub />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
