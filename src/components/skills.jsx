import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

const skillCategories = [
  {
    titleKey: 'skills.cat_languages',
    icon: '< >',
    color: 'var(--electric-purple)',
    barColor: 'linear-gradient(90deg, #C084FC, #4edea3)',
    skills: [
      { name: 'Java', level: 80, labelKey: 'skills.level_advanced' },
      { name: 'SQL', level: 60, labelKey: 'skills.level_intermediate' },
      { name: 'JavaScript', level: 35, labelKey: 'skills.level_basic' },
    ]
  },
  {
    titleKey: 'skills.cat_frameworks',
    icon: '{ }',
    color: 'var(--secondary)',
    barColor: '#4edea3',
    skills: [
      { name: 'JavaFX / Swing', level: 80, labelKey: 'skills.level_advanced' },
      { name: 'Spring Boot', level: 40, labelKey: 'skills.level_intermediate' },
      { name: 'Android SDK', level: 40, labelKey: 'skills.level_intermediate' },
      { name: 'React', level: 35, labelKey: 'skills.level_basic' },
    ]
  },
  {
    titleKey: 'skills.cat_tools',
    icon: '⚙',
    color: 'var(--tertiary)',
    barColor: '#fabc4e',
    skills: [
      { name: 'Git / GitHub', level: 70, labelKey: 'skills.level_intermediate' },
      { name: 'Maven / Gradle', level: 50, labelKey: 'skills.level_intermediate' },
      { name: 'Azure', level: 35, labelKey: 'skills.level_basic' },
      { name: 'Vite / Tailwind', level: 35, labelKey: 'skills.level_basic' },
    ]
  }
]

function Skills() {
  const { t } = useTranslation()

  return (
    <section
      id="skills"
      className="py-24 px-6"
      style={{ background: 'var(--surface)' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Encabezado */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="space-y-3">
            <span
              className="font-mono-label uppercase tracking-widest"
              style={{ color: 'var(--electric-purple)' }}
            >
              {t('skills.subtitle')}
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
              {t('skills.title')}
            </h2>
          </div>
          <p
            className="max-w-md"
            style={{ color: 'var(--on-surface-variant)', fontSize: '16px', lineHeight: '24px' }}
          >
            {t('skills.description')}
          </p>
        </div>

        {/* Grid de 3 tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.titleKey}
              className="glass-card p-8 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Cabecera de la tarjeta */}
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="font-mono-label text-lg"
                  style={{ color: category.color }}
                >
                  {category.icon}
                </span>
                <h3
                  className="font-semibold text-lg"
                  style={{
                    fontFamily: 'Geist, sans-serif',
                    color: 'var(--primary)'
                  }}
                >
                  {t(category.titleKey)}
                </h3>
              </div>

              {/* Lista de skills con barras */}
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span
                        className="font-mono-label"
                        style={{ color: 'var(--on-surface)' }}
                      >
                        {skill.name}
                      </span>
                      <span
                        className="font-mono-label"
                        style={{ color: category.color }}
                      >
                        {t(skill.labelKey)}
                      </span>
                    </div>

                    {/* Barra de progreso animada */}
                    <div className="skill-bar-bg">
                      <motion.div
                        style={{ background: category.barColor, height: '100%', borderRadius: '9999px' }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills