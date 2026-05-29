import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
const skills = [
  { name: "Java", level: 80 },
  { name: "JavaFX", level: 80 },
  { name: "Spring Boot", level: 20 },
  { name: "Android", level: 20 },
  { name: "SQL / Azure", level: 35 },
  { name: "Git / GitHub", level: 30 },
]

function Skills() {
    const { t, i18n } = useTranslation()
  return (
    <section id="skills" className="bg-gray-950 py-24 px-4">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl font-bold text-white mb-2 text-center">
          {t('skills.title')}
        </h2>
        <p className="text-cyan-400 text-center mb-12 tracking-widest uppercase text-sm">
          {t('skills.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-cyan-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  className="bg-cyan-400 h-2 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills