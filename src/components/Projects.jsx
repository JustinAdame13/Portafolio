import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

const projects = [
  {
    title: "JFocus",
    descKey: "projects.jfocus_desc",
    tags: ["Java", "JavaFX"],
    github: "https://github.com/JustinAdame13/Jfocus",
  },
  {
    title: "Nanosip",
    descKey: "projects.nanosip_desc",
    tags: ["Java", "JavaFX", "Spring Boot", "Azure", "SQL"],
    github: "https://github.com/JustinAdame13/Nanosip",
  },
  {
    title: "Nanosip-Api",
    descKey: "projects.nanosip_api_desc",
    tags: ["Java", "Spring Boot"],
    github: "https://github.com/JustinAdame13/NanosipApi"
  },
  {
    title: "Atmos",
    descKey: "projects.atmos_desc",
    tags: ["Android", "Java", "REST API"],
    github: "https://github.com/JustinAdame13/Atmos",
  },
]

function Projects() {
    const { t, i18n } = useTranslation()
  return (
    <section id="projects" className="bg-gray-900 py-24 px-4">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold text-white mb-2 text-center">
          {t('projects.title')}
        </h2>
        <p className="text-cyan-400 text-center mb-12 tracking-widest uppercase text-sm">
          {t('projects.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gray-800 rounded-xl p-6 flex flex-col gap-4 border border-gray-700 hover:border-cyan-400 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white text-xl font-bold">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                {t(project.descKey)}
                </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-700 text-cyan-400 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
                <a href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center border border-cyan-400 text-cyan-400 py-2 rounded-lg hover:bg-cyan-400 hover:text-gray-950 transition-colors text-sm font-bold"
              >
                {t('projects.github')}
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects