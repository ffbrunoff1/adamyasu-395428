import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Star, ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      </div>
      
      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 opacity-20"
      >
        <BookOpen size={60} className="text-white" />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-20 right-10 opacity-20"
      >
        <Star size={40} className="text-accent-300" />
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, -25, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-1/3 right-1/4 opacity-15"
      >
        <Sparkles size={50} className="text-accent-200" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/80 text-sm font-medium mb-6"
            >
              <Sparkles size={16} />
              Especialista em Desenvolvimento Pessoal
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Transforme seu{' '}
              <span className="text-gradient bg-gradient-to-r from-accent-300 to-accent-100 bg-clip-text text-transparent">
                desejo
              </span>{' '}
              em realidade
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-white/90 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Descubra o poder dentro de você com Adam Yasu. Cada desejo é um peso que, se bem carregado, nos leva longe.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={() => scrollToSection('livros')}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white text-primary-800 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-accent-50 hover:shadow-xl flex items-center justify-center gap-2"
              >
                Conheça Meus Livros
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                onClick={() => scrollToSection('sobre')}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-primary-800 flex items-center justify-center gap-2"
              >
                Saiba Mais
                <BookOpen size={20} className="group-hover:rotate-12 transition-transform" />
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-300 mb-1">1000+</div>
                <div className="text-white/70 text-sm">Leitores Inspirados</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-300 mb-1">5⭐</div>
                <div className="text-white/70 text-sm">Avaliações</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-300 mb-1">1</div>
                <div className="text-white/70 text-sm">Livro Publicado</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Book Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotateY: [0, 5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <motion.img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754932920729_5laot1o0zmb_ADAM_YASU_2.jpg"
                alt="O Peso do Desejo - Adam Yasu"
                className="w-80 h-auto max-w-full rounded-lg shadow-2xl pulse-glow"
                whileHover={{ scale: 1.05, rotateY: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-accent-500/30 to-transparent rounded-lg blur-2xl -z-10"></div>
            </motion.div>

            {/* Floating Quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
              className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl max-w-xs"
            >
              <div className="text-primary-800 text-sm font-medium italic">
                "Cada desejo é um peso que, se bem carregado, nos leva longe."
              </div>
              <div className="text-primary-600 text-xs mt-2 font-semibold">- Adam Yasu</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}