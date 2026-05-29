import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

function Hero() {
    const { t, i18n } = useTranslation()
  return (
    <section className="min-h-screen bg-gray-950 flex flex-col items-center justify-center text-center px-4">

      <motion.p
        className="text-cyan-400 text-lg mb-3 tracking-widest uppercase"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t('hero.greeting')}
      </motion.p>

      <motion.h1
        className="text-5xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Justin Adame
      </motion.h1>

      <motion.h2
        className="text-2xl text-gray-400 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {t('hero.role')}
      </motion.h2>

      <motion.p
        className="text-gray-500 max-w-xl mb-2 text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {t('hero.bio1')}
        
      </motion.p>

        <motion.p
        className="text-gray-500 max-w-xl mb-10 text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        >
        {t('hero.bio2')}
      </motion.p>

      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        
          <a href="#projects"
          className="bg-cyan-400 text-gray-950 font-bold px-6 py-3 rounded-lg hover:bg-cyan-300 transition-colors"
        >
          {t('hero.cta_projects')}
        </a>
        
          <a href="#contact"
          className="border border-cyan-400 text-cyan-400 font-bold px-6 py-3 rounded-lg hover:bg-cyan-400 hover:text-gray-950 transition-colors"
        >
          {t('hero.cta_contact')}
        </a>
      </motion.div>

    </section>
  )
}

export default Hero