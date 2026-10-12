import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

// Datos del evento. Si participas en más hackathons, agrega otro objeto aquí
// y el .map() de abajo crea su tarjeta automáticamente.
const events = [
  {
    id: "road-to-tech-2026",
    eventKey: "hackathon.event",
    challengeKey: "hackathon.challenge",
    dateKey: "hackathon.date",
    descKey: "hackathon.description",
    roles: ["hackathon.role_pm", "hackathon.role_backend", "hackathon.role_devops"],
    contributions: ["hackathon.c1", "hackathon.c2", "hackathon.c3"],
    repos: [
      { labelKey: "hackathon.repo_backend",  url: "https://github.com/JustinAdame13/Reto-Softteck" },
      { labelKey: "hackathon.repo_frontend", url: "https://github.com/ToxiCreep/Front_End_Softtek" },
    ],
    stack: ["Java 21", "Spring Boot", "PostgreSQL", "React", "TypeScript", "Node.js", "Docker", "LLMs"],
  },
]

function Hackathon() {
  const { t } = useTranslation()

  return (
    <section
      id="hackathon"
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Encabezado */}
        <div className="mb-16">
          <span
            className="font-mono-label uppercase tracking-widest"
            style={{ color: 'var(--electric-purple)' }}
          >
            {t('hackathon.subtitle')}
          </span>
          <h2
            className="font-bold mt-3"
            style={{
              fontFamily: 'Geist, sans-serif',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              letterSpacing: '-0.02em',
              color: 'var(--on-surface)'
            }}
          >
            {t('hackathon.title')}
          </h2>
        </div>

        {events.map((event) => (
          <motion.article
            key={event.id}
            className="glass-card rounded-xl p-8 md:p-10 grid grid-cols-1 lg:grid-cols-5 gap-10"
            style={{ borderLeft: '3px solid var(--tertiary)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >

            {/* Columna izquierda — evento, roles y descripción */}
            <div className="lg:col-span-3 flex flex-col gap-5">
              <span
                className="font-mono-label uppercase"
                style={{ color: 'var(--tertiary)', fontSize: '12px' }}
              >
                🏆 {t(event.dateKey)}
              </span>

              <div>
                <h3
                  className="font-semibold text-2xl"
                  style={{ fontFamily: 'Geist, sans-serif', color: 'var(--primary)' }}
                >
                  {t(event.eventKey)}
                </h3>
                <p className="mt-1 text-sm" style={{ color: 'var(--on-surface-variant)' }}>
                  {t(event.challengeKey)}
                </p>
              </div>

              {/* Roles */}
              <div className="flex flex-wrap gap-2">
                {event.roles.map((roleKey) => (
                  <span
                    key={roleKey}
                    className="px-3 py-1 rounded-full font-mono-label uppercase"
                    style={{
                      border: '1px solid var(--electric-purple)',
                      color: 'var(--electric-purple)',
                      fontSize: '10px'
                    }}
                  >
                    {t(roleKey)}
                  </span>
                ))}
              </div>

              <p className="leading-relaxed" style={{ color: 'var(--on-surface-variant)' }}>
                {t(event.descKey)}
              </p>

              {/* Stack */}
              <div className="flex flex-wrap gap-2">
                {event.stack.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded font-mono-label uppercase"
                    style={{
                      background: 'var(--surface-container-highest)',
                      color: 'var(--tertiary)',
                      fontSize: '10px'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Columna derecha — mi participación y enlaces */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              <h4
                className="font-mono-label uppercase tracking-widest"
                style={{ color: 'var(--on-surface)' }}
              >
                {t('hackathon.contrib_title')}
              </h4>

              <ul className="flex flex-col gap-4">
                {event.contributions.map((cKey) => (
                  <li key={cKey} className="flex gap-3 text-sm leading-relaxed">
                    <span style={{ color: 'var(--secondary)' }}>▹</span>
                    <span style={{ color: 'var(--on-surface-variant)' }}>{t(cKey)}</span>
                  </li>
                ))}
              </ul>

              {/* Enlaces a los repos y a la sección de proyectos */}
              <div className="flex flex-wrap gap-6 pt-2 mt-auto">
                {event.repos.map((repo) => (
                  <a
                    key={repo.url}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono-label"
                    style={{ color: 'var(--tertiary)' }}
                  >
                    {t(repo.labelKey)} <span style={{ fontSize: '16px' }}>↗</span>
                  </a>
                ))}
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 font-mono-label"
                  style={{ color: 'var(--electric-purple)' }}
                >
                  {t('hackathon.see_projects')} <span style={{ fontSize: '16px' }}>↑</span>
                </a>
              </div>
            </div>

          </motion.article>
        ))}

      </div>
    </section>
  )
}

export default Hackathon
