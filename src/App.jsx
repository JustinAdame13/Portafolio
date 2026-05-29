import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import { useTranslation } from 'react-i18next'

function Footer() {
  const { t } = useTranslation()

  return (
    <footer
      className="w-full"
      style={{
        borderTop: '1px solid rgba(77, 67, 84, 0.3)',
        background: 'var(--surface-deep)'
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
          © 2025 Justin.dev
        </p>

      </div>
    </footer>
  )
}

function App() {
  return (
    <div style={{ background: 'var(--surface)', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
