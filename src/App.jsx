import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/skills'
import Projects from './components/Projects'
import Hackathon from './components/Hackathon'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

// Fondo animado detrás de toda la página (solo decoración, aria-hidden)
function Aurora() {
  return (
    <div className="aurora" aria-hidden="true">
      <div className="aurora__blob aurora__blob--1" />
      <div className="aurora__blob aurora__blob--2" />
      <div className="aurora__blob aurora__blob--3" />
      <div className="aurora__blob aurora__blob--4" />
      <div className="aurora__grain" />
    </div>
  )
}

// Un solo listener para toda la página: cuando el mouse se mueve sobre
// cualquier .glass-card, le pasamos la posición del cursor como variables CSS
// (--mx, --my) y el CSS dibuja el brillo en ese punto.
function useGlassSpotlight() {
  useEffect(() => {
    const handleMove = (e) => {
      const card = e.target.closest?.('.glass-card')
      if (!card) return
      const rect = card.getBoundingClientRect()
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`)
      card.style.setProperty('--my', `${e.clientY - rect.top}px`)
    }
    window.addEventListener('pointermove', handleMove, { passive: true })
    return () => window.removeEventListener('pointermove', handleMove)
  }, [])
}

function Footer() {
  const { t } = useTranslation()

  return (
    <footer
      className="w-full"
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        background: 'rgba(3, 5, 13, 0.55)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)'
      }}
    >
      <div
        className="flex flex-col md:flex-row justify-between items-center py-12 px-6 gap-8 mx-auto"
        style={{ maxWidth: '1200px' }}
      >

        {/* Logo */}
        <span
          className="font-bold text-xl tracking-tighter"
          style={{
            color: 'var(--electric-purple)',
            fontFamily: 'Geist, sans-serif'
          }}
        >
          JUSTIN.DEV
        </span>

        {/* Links */}
        <div className="flex gap-8">
          {[
            { href: 'https://github.com/JustinAdame13', label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/justin-adame-434724412/', label: 'LinkedIn' },
            { href: 'https://profile.indeed.com/justin-adame', label: 'Indeed' },
          ].map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-label uppercase transition-colors duration-200"
              style={{ color: 'var(--on-surface-variant)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--electric-purple)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--on-surface-variant)'}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p
          className="font-mono-label uppercase"
          style={{ color: 'var(--on-surface-variant)' }}
        >
          © {new Date().getFullYear()} Justin.dev
        </p>

      </div>
    </footer>
  )
}

function App() {
  useGlassSpotlight()

  return (
    <div style={{ minHeight: '100vh' }}>
      <Aurora />
      <div className="page-content">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Hackathon />
        <Contact />
      </main>
      <Footer />
      </div>
    </div>
  )
}

export default App
