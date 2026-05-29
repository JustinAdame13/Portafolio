import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

const projects = [
  {
    title: "JFocus",
    descKey: "projects.jfocus_desc",
    tags: ["Java", "JavaFX"],
    github: "https://github.com/JustinAdame13/Jfocus",
    accentColor: 'var(--electric-purple)',
    tagTextColor: 'var(--electric-purple)',
  },
  {
    title: "Nanosip",
    descKey: "projects.nanosip_desc",
    tags: ["Java", "JavaFX", "Spring Boot", "Azure", "SQL"],
    github: "https://github.com/JustinAdame13/Nanosip",
    accentColor: 'var(--secondary)',
    tagTextColor: 'var(--secondary)',
  },
  {
    title: "Nanosip-Api",
    descKey: "projects.nanosip_api_desc",
    tags: ["Java", "Spring Boot"],
    github: "https://github.com/JustinAdame13/NanosipApi",
    accentColor: 'var(--tertiary)',
    tagTextColor: 'var(--tertiary)',
  },
  {
    title: "Atmos",
    descKey: "projects.atmos_desc",
    tags: ["Android", "Java", "REST API"],
    github: "https://github.com/JustinAdame13/Atmos",
    accentColor: 'var(--electric-purple)',
    tagTextColor: 'var(--electric-purple)',
  },
]

function Projects() {
  const { t } = useTranslation()

  return (
    <section
      id="projects"
      className="py-24 px-6"
      style={{ background: 'var(--surface-container-low)' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Encabezado */}
        <div className="mb-16">
          <span
            className="font-mono-label uppercase tracking-widest"
            style={{ color: 'var(--electric-purple)' }}
          >
            {t('projects.subtitle')}
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
            {t('projects.title')}
          </h2>
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="glass-card rounded-xl p-8 flex flex-col gap-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Título */}
              <h3
                className="font-semibold text-xl"
                style={{
                  fontFamily: 'Geist, sans-serif',
                  color: 'var(--primary)'
                }}
              >
                {project.title}
              </h3>

              {/* Descripción — flex-grow para que empuje el resto hacia abajo */}
              <p
                className="text-sm leading-relaxed flex-grow"
                style={{ color: 'var(--on-surface-variant)' }}
              >
                {t(project.descKey)}
              </p>

              {/* Tags de tecnologías */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded font-mono-label uppercase"
                    style={{
                      background: 'var(--surface-container-highest)',
                      color: project.tagTextColor,
                      fontSize: '10px'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Botón GitHub */}
              
                <a href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono-label transition-all duration-300 pt-2"
                style={{ color: project.accentColor }}
                onMouseEnter={e => {
                  e.currentTarget.style.gap = '12px'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.gap = '8px'
                }}
              >
                {t('projects.github')}
                <span style={{ fontSize: '16px' }}>↗</span>
              </a>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects