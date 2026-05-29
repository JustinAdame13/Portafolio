import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

function Contact() {
    const { t, i18n } = useTranslation()
  return (
    <section id="contact" className="bg-gray-950 py-24 px-4">
      <div className="max-w-2xl mx-auto text-center">

        <motion.h2
          className="text-3xl font-bold text-white mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {t('contact.title')}
        </motion.h2>

        <motion.p
          className="text-cyan-400 text-center mb-6 tracking-widest uppercase text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {t('contact.subtitle')}
        </motion.p>

        <motion.p
          className="text-gray-400 mb-12 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {t('contact.description')}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          
            <a href="mailto:Zotin_omar@hotmail.com"
            className="bg-cyan-400 text-gray-950 font-bold px-8 py-3 rounded-lg hover:bg-cyan-300 transition-colors"
          >
            Zotin_omar@hotmail.com
          </a>
          
           <a href="https://github.com/JustinAdame13"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cyan-400 text-cyan-400 font-bold px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-gray-950 transition-colors"
          >
            GitHub
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default Contact