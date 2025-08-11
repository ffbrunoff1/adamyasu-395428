import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Instagram, Mail, BookOpen, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const quickLinks = [
    { name: 'Início', id: 'inicio' },
    { name: 'Sobre', id: 'sobre' },
    { name: 'Livros', id: 'livros' },
    { name: 'Contato', id: 'contato' }
  ]

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/adamyasu',
      color: 'hover:text-pink-500'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:contato@adamyasu.com',
      color: 'hover:text-primary-500'
    }
  ]

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-primary-900 to-primary-800 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-accent-400/10 to-primary-400/10 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ 
          rotate: [360, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-primary-300/10 to-accent-300/10 rounded-full blur-2xl"
      />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="mb-6"
              >
                <img 
                  src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/adam-yasu/adam-yasu-logo-full-2025-08-11T17-22-12-821Z.svg" 
                  alt="Adam Yasu"
                  className="h-12 w-auto filter invert"
                />
              </motion.div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
                Especialista em desenvolvimento pessoal e motivação. Transformando vidas através das palavras e inspirando mudanças reais.
              </p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 max-w-md"
              >
                <p className="text-accent-200 italic text-base mb-2">
                  "Cada desejo é um peso que, se bem carregado, nos leva longe."
                </p>
                <p className="text-gray-400 text-sm font-semibold">
                  - Adam Yasu
                </p>
              </motion.div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">
                Navegação
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <motion.button
                      onClick={() => scrollToSection(link.id)}
                      whileHover={{ x: 5, color: '#66B3CC' }}
                      className="text-gray-300 hover:text-accent-300 transition-all duration-200 text-base font-medium block"
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact & Social */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">
                Conecte-se
              </h3>
              
              <div className="space-y-4 mb-6">
                <motion.a
                  href="mailto:contato@adamyasu.com"
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center gap-3 text-gray-300 hover:text-accent-300 transition-all duration-200"
                >
                  <Mail size={18} />
                  <span className="text-base">contato@adamyasu.com</span>
                </motion.a>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">
                  Redes Sociais
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`bg-white/10 backdrop-blur-sm p-3 rounded-full text-gray-300 ${social.color} transition-all duration-300 hover:bg-white/20`}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col sm:flex-row items-center gap-4 text-gray-400 text-sm"
              >
                <span>© 2024 Adam Yasu. Todos os direitos reservados.</span>
                <span className="hidden sm:block">|</span>
                <span>Desenvolvido com</span>
                <Heart size={16} className="text-red-400" />
                <span>por</span>
                <motion.a
                  href="https://papum.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, color: '#66B3CC' }}
                  className="font-semibold hover:text-accent-300 transition-colors"
                >
                  Papum
                </motion.a>
              </motion.div>

              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="group bg-primary-600 hover:bg-primary-700 p-3 rounded-full transition-all duration-300 hover:shadow-lg"
              >
                <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}