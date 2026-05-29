import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      < Contact />
    </main>
    </>
  )
}

export default App
