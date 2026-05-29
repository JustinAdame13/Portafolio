import { useTranslation } from 'react-i18next'

function Navbar() {
  const { t, i18n } = useTranslation()

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es')
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-950 bg-opacity-90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">

        <span className="text-cyan-400 font-bold text-xl">
          Justin.dev
        </span>

        <div className="flex items-center gap-6">
          <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
            {t('nav.about')}
          </a>
          <a href="#skills" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
            {t('nav.skills')}
          </a>
          <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
            {t('nav.projects')}
          </a>
          <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
            {t('nav.contact')}
          </a>

          <button
            onClick={toggleLanguage}
            className="border border-cyan-400 text-cyan-400 text-xs font-bold px-3 py-1 rounded-lg hover:bg-cyan-400 hover:text-gray-950 transition-colors"
          >
            {i18n.language === 'es' ? 'EN' : 'ES'}
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar