import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/JustinAdame13',
    color: 'var(--electric-purple)',
  },
  {
    label: 'LinkedIn',
    href: 'www.linkedin.com/in/justin-adame-garcia-434724412',
    color: 'var(--secondary)',
  },
  {
    label: 'Indeed',
    href: 'https://profile.indeed.com/justin-adame',
    color: 'var(--tertiary)',
  },
]

function Contact() {
  const { t } = useTranslation()

  return (
    <section
      id="contact"
      className="py-24 px-6"
      style={{ background: 'var(--surface)' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Tarjeta principal */}
        <motion.div
          className="glass-card rounded-2xl p-8 md:p-16 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >

          {/* Resplandor decorativo en esquina superior derecha */}
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
            style={{
              background: 'rgba(192, 132, 252, 0.05)',
              filter: 'blur(48px)',
              transform: 'translate(30%, -30%)'
            }}
          />

          {/* Grid de dos columnas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">

            {/* Columna izquierda — texto e info */}
            <div className="space-y-8">

              {/* Encabezado */}
              <div className="space-y-3">
                <span
                  className="font-mono-label uppercase tracking-widest"
                  style={{ color: 'var(--electric-purple)' }}
                >
                  {t('contact.subtitle')}
                </span>
                <h2
                  className="font-bold"
                  style={{
                    fontFamily: 'Geist, sans-serif',
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    letterSpacing: '-0.02em',
                    color: 'var(--on-surface)'
                  }}
                >
                  {t('contact.title')}
                </h2>
              </div>

              <p
                style={{
                  color: 'var(--on-surface-variant)',
                  fontSize: '18px',
                  lineHeight: '28px'
                }}
              >
                {t('contact.description')}
              </p>

              {/* Info de contacto */}
              <div className="space-y-4">

                {/* Email */}
                <div className="flex items-center gap-4 group">
                  <div
                    className="glass-card w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{ color: 'var(--electric-purple)' }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'var(--electric-purple)'
                      e.currentTarget.style.color = '#0b1326'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = ''
                      e.currentTarget.style.color = 'var(--electric-purple)'
                    }}
                  >
                    <span style={{ fontSize: '20px' }}>✉</span>
                  </div>
                  
                    <a href="mailto:Zotin_omar@hotmail.com"
                    className="transition-colors duration-300"
                    style={{ color: 'var(--on-surface)', fontSize: '16px' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--electric-purple)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--on-surface)'}
                  >
                    Zotin_omar@hotmail.com
                  </a>
                </div>

                {/* Ubicación */}
                <div className="flex items-center gap-4">
                  <div
                    className="glass-card w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ color: 'var(--electric-purple)' }}
                  >
                    <span style={{ fontSize: '20px' }}>📍</span>
                  </div>
                  <span
                    style={{ color: 'var(--on-surface)', fontSize: '16px' }}
                  >
                    {t('contact.location')}
                  </span>
                </div>

              </div>
            </div>

            {/* Columna derecha — links de redes sociales */}
            <div className="flex flex-col justify-center gap-4">

              <p
                className="font-mono-label uppercase tracking-widest mb-2"
                style={{ color: 'var(--on-surface-variant)' }}
              >
                {t('contact.find_me')}
              </p>

              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card flex items-center justify-between px-6 py-4 rounded-xl transition-all duration-300"
                  style={{ color: link.color, textDecoration: 'none' }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = link.color
                    e.currentTarget.style.transform = 'translateX(4px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = ''
                    e.currentTarget.style.transform = 'translateX(0)'
                  }}
                >
                  <span
                    className="font-semibold"
                    style={{ fontFamily: 'Geist, sans-serif', fontSize: '16px' }}
                  >
                    {link.label}
                  </span>
                  <span style={{ fontSize: '18px' }}>↗</span>
                </motion.a>
              ))}

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact