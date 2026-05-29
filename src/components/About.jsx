import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

function About() {
    const { t, i18n } = useTranslation()
  return (
    <section id="about" className="bg-gray-900 py-24 px-4">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl font-bold text-white mb-2 text-center">
          {t('about.title')}
        </h2>
        <p className="text-cyan-400 text-center mb-12 tracking-widest uppercase text-sm">
          {t('about.subtitle')}
        </p>

        <div className="flex flex-col md:flex-row gap-12 items-center">

          <motion.div
            className="w-48 h-48 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-gray-400 text-sm">Tu foto aquí</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              {t('about.p1')}
            </p>
            <p className="text-gray-400 leading-relaxed">
              {t('about.p2')}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About