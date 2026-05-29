import { useState } from 'react'
import { useTranslation } from 'react-i18next'

function Navbar() {
  const { t, i18n } = useTranslation()

  // isMenuOpen guarda si el menú móvil está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es')
  }

  // Cierra el menú cuando el usuario toca un link
  const closeMenu = () => setIsMenuOpen(false)

  const navLinks = [
    { href: '#projects', label: t('nav.projects') },
    { href: '#skills',   label: t('nav.skills')   },
    { href: '#about',    label: t('nav.about')    },
    { href: '#contact',  label: t('nav.contact')  },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 glass-panel">

      {/* ── Barra principal ── */}
      <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">

        {/* Logo */}
        <span
          className="font-bold text-xl tracking-tighter"
          style={{ color: 'var(--electric-purple)', fontFamily: 'Geist, sans-serif' }}
        >
          JUSTIN.DEV
        </span>

        {/* Links — solo visibles en pantallas medianas en adelante */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            
             <a key={link.href}
              href={link.href}
              className="text-sm transition-colors duration-300"
              style={{ color: 'var(--on-surface-variant)', fontFamily: 'JetBrains Mono, monospace' }}
              onMouseEnter={e => e.target.style.color = 'var(--electric-purple)'}
              onMouseLeave={e => e.target.style.color = 'var(--on-surface-variant)'}
            >
              {link.label}
            </a>
          ))}

          {/* Botón Resume */}
          <a
            href="#"
            className="px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all duration-300"
            style={{
              background: 'var(--primary-container)',
              color: 'var(--on-primary-container)',
              fontFamily: 'JetBrains Mono, monospace',
              boxShadow: '0 0 15px rgba(192, 132, 252, 0.3)'
            }}
            onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.15)'}
            onMouseLeave={e => e.currentTarget.style.filter = 'brightness(1)'}
          >
            Resume
          </a>

          {/* Toggle idioma */}
          <button
            onClick={toggleLanguage}
            className="border text-xs font-bold px-3 py-1 rounded-lg transition-colors duration-300"
            style={{
              borderColor: 'var(--electric-purple)',
              color: 'var(--electric-purple)',
              fontFamily: 'JetBrains Mono, monospace'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--electric-purple)'
              e.currentTarget.style.color = '#0b1326'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = 'var(--electric-purple)'
            }}
          >
            {i18n.language === 'es' ? 'EN' : 'ES'}
          </button>
        </div>

        {/* Botones móvil: idioma + hamburguesa — solo visibles en móvil */}
        <div className="flex md:hidden items-center gap-3">

          {/* Toggle idioma (también en móvil) */}
          <button
            onClick={toggleLanguage}
            className="border text-xs font-bold px-3 py-1 rounded-lg transition-colors duration-300"
            style={{
              borderColor: 'var(--electric-purple)',
              color: 'var(--electric-purple)',
              fontFamily: 'JetBrains Mono, monospace'
            }}
          >
            {i18n.language === 'es' ? 'EN' : 'ES'}
          </button>

          {/* Botón hamburguesa */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col justify-center items-center w-9 h-9 gap-1.5"
            style={{ color: 'var(--electric-purple)' }}
            aria-label="Toggle menu"
          >
            {/* Las tres líneas de la hamburguesa.
                Cuando el menú está abierto se convierten en una X */}
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                background: 'var(--electric-purple)',
                transform: isMenuOpen ? 'translateY(8px) rotate(45deg)' : 'none'
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                background: 'var(--electric-purple)',
                opacity: isMenuOpen ? 0 : 1
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                background: 'var(--electric-purple)',
                transform: isMenuOpen ? 'translateY(-8px) rotate(-45deg)' : 'none'
              }}
            />
          </button>
        </div>
      </div>

      {/* ── Menú desplegable móvil ── */}
      {/* Solo se renderiza cuando isMenuOpen es true */}
      {isMenuOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{
            borderTop: '1px solid rgba(192, 132, 252, 0.15)',
            background: 'rgba(19, 27, 46, 0.97)'
          }}
        >
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="py-2 text-sm transition-colors duration-300"
              style={{
                color: 'var(--on-surface-variant)',
                fontFamily: 'JetBrains Mono, monospace',
                borderBottom: '1px solid rgba(77, 67, 84, 0.3)'
              }}
            >
              {link.label}
            </a>
          ))}

          {/* Resume en el menú móvil */}
          <a
            href="#"
            onClick={closeMenu}
            className="mt-2 py-3 rounded-xl text-xs font-bold uppercase tracking-widest text-center transition-all duration-300"
            style={{
              background: 'var(--primary-container)',
              color: 'var(--on-primary-container)',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            Resume
          </a>
        </div>
      )}

    </nav>
  )
}

export default Navbar