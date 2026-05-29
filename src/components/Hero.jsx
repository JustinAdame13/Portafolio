import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { useEffect } from "react"

function Hero() {
  const { t } = useTranslation()

  // Este efecto hace que la luz siga al cursor del mouse
  useEffect(() => {
    const glow = document.getElementById('hero-glow')
    const handleMouseMove = (e) => {
      if (glow) {
        glow.style.left = `${e.clientX}px`
        glow.style.top = `${e.clientY}px`
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    // Limpieza: cuando el componente se desmonta, removemos el listener
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
      style={{ background: 'var(--surface)' }}
    >
      {/* Luz que sigue al cursor */}
      <div id="hero-glow" className="hero-glow" />

      {/* Contenido principal — z-10 para que esté encima de la luz */}
      <div className="max-w-4xl mx-auto space-y-8 relative z-10">

        {/* Badge superior */}
        <motion.div
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span
            className="glass-card px-4 py-1 rounded-full font-mono-label uppercase tracking-widest"
            style={{ color: 'var(--electric-purple)', borderColor: 'rgba(192, 132, 252, 0.2)' }}
          >
            {t('hero.badge')}
          </span>
        </motion.div>

        {/* Nombre principal */}
        <motion.h1
          className="font-bold leading-tight"
          style={{
            fontFamily: 'Geist, sans-serif',
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            letterSpacing: '-0.04em',
            color: 'var(--on-surface)'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {t('hero.greeting')} <span className="text-gradient">Justin Adame</span>
          <br />
          {t('hero.role')}
        </motion.h1>

        {/* Descripción */}
        <motion.p
          className="max-w-2xl mx-auto"
          style={{
            color: 'var(--on-surface-variant)',
            fontSize: '18px',
            lineHeight: '28px'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t('hero.bio1')} {t('hero.bio2')}
        </motion.p>

        {/* Botones */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Botón primario */}
          
            <a href="#projects"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            style={{
              background: 'var(--primary-container)',
              color: 'var(--on-primary-container)',
              fontSize: '16px'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 0 24px rgba(192, 132, 252, 0.4)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            {t('hero.cta_projects')}
            <span style={{ fontSize: '18px' }}>→</span>
          </a>

          {/* Botón secundario */}
          
            <a href="#contact"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            style={{
              border: '1px solid rgba(192, 132, 252, 0.4)',
              color: 'var(--electric-purple)',
              fontSize: '16px'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(192, 132, 252, 0.1)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
            }}
          >
            {t('hero.cta_contact')}
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero