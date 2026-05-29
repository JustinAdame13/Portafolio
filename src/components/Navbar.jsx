import { useTranslation } from 'react-i18next'

function Navbar() {
  const { t, i18n } = useTranslation()

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es')
  }

  return (
    <nav className="fixed top-0 w-full z-50 glass-panel">
      <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">

        {/* Logo */}
        <span
          className="font-bold text-xl tracking-tighter"
          style={{ color: 'var(--electric-purple)', fontFamily: 'Geist, sans-serif' }}
        >
          JUSTIN.DEV
        </span>

        {/* Links de navegación */}
        <div className="hidden md:flex items-center gap-8">
          
            <a href="#projects"
            className="text-sm transition-colors duration-300"
            style={{ color: 'var(--on-surface-variant)', fontFamily: 'JetBrains Mono, monospace' }}
            onMouseEnter={e => e.target.style.color = 'var(--electric-purple)'}
            onMouseLeave={e => e.target.style.color = 'var(--on-surface-variant)'}
          >
            {t('nav.projects')}
          </a>
          
            <a href="#skills"
            className="text-sm transition-colors duration-300"
            style={{ color: 'var(--on-surface-variant)', fontFamily: 'JetBrains Mono, monospace' }}
            onMouseEnter={e => e.target.style.color = 'var(--electric-purple)'}
            onMouseLeave={e => e.target.style.color = 'var(--on-surface-variant)'}
          >
            {t('nav.skills')}
          </a>
          
            <a href="#about"
            className="text-sm transition-colors duration-300"
            style={{ color: 'var(--on-surface-variant)', fontFamily: 'JetBrains Mono, monospace' }}
            onMouseEnter={e => e.target.style.color = 'var(--electric-purple)'}
            onMouseLeave={e => e.target.style.color = 'var(--on-surface-variant)'}
          >
            {t('nav.about')}
          </a>
          
            <a href="#contact"
            className="text-sm transition-colors duration-300"
            style={{ color: 'var(--on-surface-variant)', fontFamily: 'JetBrains Mono, monospace' }}
            onMouseEnter={e => e.target.style.color = 'var(--electric-purple)'}
            onMouseLeave={e => e.target.style.color = 'var(--on-surface-variant)'}
          >
            {t('nav.contact')}
          </a>

          {/* Botón Resume */}
          
            <a href="#"
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

          {/* Toggle de idioma */}
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

      </div>
    </nav>
  )
}

export default Navbar