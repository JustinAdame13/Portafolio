import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import foto from "../assets/foto.jpeg"

function About() {
  const { t } = useTranslation()

  return (
    <section
      id="about"
      className="py-24 px-6"
      style={{ background: 'var(--surface-container-low)' }}
    >
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Columna izquierda — Foto */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Resplandor detrás de la foto — aparece en hover */}
            <div
              className="absolute -inset-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'rgba(192, 132, 252, 0.1)',
                filter: 'blur(32px)'
              }}
            />

            {/* Contenedor de la foto */}
            <div
              className="glass-card rounded-2xl overflow-hidden relative"
              style={{ aspectRatio: '1 / 1', borderColor: 'rgba(192, 132, 252, 0.3)' }}
            >
              <img
                src={foto}
                alt="Justin Adame"
                className="w-full h-full object-cover transition-all duration-700"
                style={{ filter: 'grayscale(100%)' }}
                onMouseEnter={e => e.currentTarget.style.filter = 'grayscale(0%)'}
                onMouseLeave={e => e.currentTarget.style.filter = 'grayscale(100%)'}
              />
            </div>
          </motion.div>

          {/* Columna derecha — Texto y stats */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Encabezado */}
            <div className="space-y-3">
              <span
                className="font-mono-label uppercase tracking-widest"
                style={{ color: 'var(--electric-purple)' }}
              >
                {t('about.subtitle')}
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
                {t('about.title')}
              </h2>
            </div>

            {/* Párrafos de descripción */}
            <div className="space-y-5">
              <p
                style={{
                  color: 'var(--on-surface-variant)',
                  fontSize: '18px',
                  lineHeight: '28px'
                }}
              >
                {t('about.p1')}
              </p>
              <p
                style={{
                  color: 'var(--on-surface-variant)',
                  fontSize: '16px',
                  lineHeight: '24px'
                }}
              >
                {t('about.p2')}
              </p>
            </div>

            {/* Stats — números grandes */}
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <div
                  className="font-bold"
                  style={{
                    fontFamily: 'Geist, sans-serif',
                    fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                    color: 'var(--electric-purple)',
                    letterSpacing: '-0.04em'
                  }}
                >
                  2+
                </div>
                <div
                  className="font-mono-label uppercase mt-1"
                  style={{ color: 'var(--on-surface-variant)' }}
                >
                  {t('about.years')}
                </div>
              </div>
              <div>
                <div
                  className="font-bold"
                  style={{
                    fontFamily: 'Geist, sans-serif',
                    fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                    color: 'var(--electric-purple)',
                    letterSpacing: '-0.04em'
                  }}
                >
                  4+
                </div>
                <div
                  className="font-mono-label uppercase mt-1"
                  style={{ color: 'var(--on-surface-variant)' }}
                >
                  {t('about.projects')}
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About