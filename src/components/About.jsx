import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Target, Users, BookOpen, Award, Lightbulb } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Transformação Genuína",
      description: "Acredito que cada pessoa possui um potencial único e transformador esperando para ser descoberto."
    },
    {
      icon: Target,
      title: "Desenvolvimento Contínuo",
      description: "O crescimento pessoal é uma jornada constante de autoconhecimento e superação de limites."
    },
    {
      icon: Users,
      title: "Conexão Humana",
      description: "Através das palavras, criamos pontes que conectam corações e transformam vidas profundamente."
    }
  ]

  const achievements = [
    {
      icon: BookOpen,
      number: "1",
      label: "Livro Publicado",
      description: "O Peso do Desejo"
    },
    {
      icon: Users,
      number: "1000+",
      label: "Vidas Impactadas",
      description: "Leitores transformados"
    },
    {
      icon: Award,
      number: "5⭐",
      label: "Avaliação Média",
      description: "Excelência reconhecida"
    },
    {
      icon: Lightbulb,
      number: "10+",
      label: "Anos de Estudo",
      description: "Desenvolvimento pessoal"
    }
  ]

  return (
    <section id="sobre" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-accent-50/30"></div>
      
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-primary-200/20 to-accent-200/20 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary-100 rounded-full px-4 py-2 text-primary-700 text-sm font-medium mb-6"
          >
            <Heart size={16} />
            Sobre Adam Yasu
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Especialista em{' '}
            <span className="text-gradient bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              Desenvolvimento Pessoal
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Motivação e autodescobrimento são as chaves para um futuro brilhante. 
            Como autor e especialista, dedico minha vida a transformar perspectivas e inspirar mudanças reais.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Uma jornada de transformação através das palavras
            </h3>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Adam Yasu tem uma vasta experiência em transformar vidas por meio de suas palavras inspiradoras e métodos eficazes. 
                Especialista em motivação e desenvolvimento pessoal, Adam acredita que cada pessoa possui um potencial único 
                esperando para ser descoberto.
              </p>
              
              <p>
                Através de sua abordagem humanizada e profunda compreensão das emoções humanas, Adam guia seus leitores 
                em uma jornada de autoconhecimento e crescimento pessoal. Suas obras exploram as complexidades dos 
                anseios mais profundos, revelando as nuances entre paixão e razão.
              </p>
              
              <p>
                "O Peso do Desejo", sua obra mais recente, é um convite para refletir sobre as escolhas que fazemos 
                e as consequências que elas podem ter em nossas vidas, desvendando os segredos do coração humano.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('contato')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group bg-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-primary-700 hover:shadow-xl flex items-center gap-2"
              >
                Entre em Contato
                <Heart size={20} className="group-hover:scale-110 transition-transform" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-primary-100/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-full flex-shrink-0">
                    <value.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Impacto e Conquistas
            </h3>
            <p className="text-primary-100 text-lg max-w-2xl mx-auto">
              Números que refletem o compromisso com a transformação de vidas através do desenvolvimento pessoal
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 * index }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4 group-hover:bg-white/20 transition-all duration-300">
                  <achievement.icon className="w-8 h-8 text-accent-300 mx-auto mb-4" />
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-primary-100 font-semibold text-lg mb-1">
                    {achievement.label}
                  </div>
                  <div className="text-primary-200 text-sm">
                    {achievement.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}