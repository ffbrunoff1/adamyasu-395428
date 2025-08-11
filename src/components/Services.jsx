import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Star, ArrowRight, Heart, Sparkles, Quote } from 'lucide-react'

export default function Services() {
  const bookDetails = {
    title: "O Peso do Desejo",
    image: "https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754932920729_5laot1o0zmb_ADAM_YASU_2.jpg",
    description: "\"O Peso do Desejo\" é uma leitura envolvente que explora as complexidades das emoções humanas e os conflitos interiores que podem surgir dos anseios mais profundos. Através de uma narrativa rica e personagens bem desenvolvidos, o autor conduz o leitor por uma jornada de autodescobrimento, revelando as nuances entre paixão e razão. Este livro é um convite para refletir sobre as escolhas que fazemos e as consequências que elas podem ter em nossas vidas, desvendando os segredos do coração.",
    highlights: [
      "Jornada de autodescobrimento",
      "Exploração das emoções humanas", 
      "Narrativa rica e envolvente",
      "Reflexões sobre escolhas de vida"
    ],
    quotes: [
      "Uma obra que toca a alma e desperta a consciência sobre nossos desejos mais profundos.",
      "Adam Yasu consegue traduzir em palavras os sentimentos que muitas vezes não conseguimos expressar.",
      "Um livro transformador que mudou minha perspectiva sobre vida e relacionamentos."
    ]
  }

  const benefits = [
    {
      icon: Heart,
      title: "Autoconhecimento Profundo",
      description: "Descubra as camadas mais íntimas de sua personalidade e compreenda seus verdadeiros desejos."
    },
    {
      icon: Sparkles,
      title: "Transformação Interior",
      description: "Experimente uma mudança genuína em sua forma de ver a vida e os relacionamentos."
    },
    {
      icon: BookOpen,
      title: "Sabedoria Prática",
      description: "Aplique os ensinamentos em situações reais do seu dia a dia para resultados concretos."
    },
    {
      icon: Star,
      title: "Crescimento Pessoal",
      description: "Desenvolva ferramentas emocionais para enfrentar desafios e alcançar seus objetivos."
    }
  ]

  return (
    <section id="livros" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-accent-200/20 to-primary-200/20 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{ 
          rotate: [360, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-primary-300/20 to-accent-300/20 rounded-full blur-2xl"
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
            <BookOpen size={16} />
            Livro Disponível
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Descubra{' '}
            <span className="text-gradient bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              O Peso do Desejo
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Uma jornada literária que explora as profundezas da alma humana e revela os segredos para uma vida plena e transformadora.
          </p>
        </motion.div>

        {/* Main Book Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Book Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative"
            >
              <motion.img
                src={bookDetails.image}
                alt={bookDetails.title}
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                animate={{ 
                  y: [0, -10, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent rounded-2xl blur-2xl -z-10"></div>
            </motion.div>

            {/* Floating Rating */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-1 text-yellow-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <div className="text-gray-800 font-semibold text-sm">5.0/5.0</div>
              <div className="text-gray-500 text-xs">Avaliação dos leitores</div>
            </motion.div>
          </motion.div>

          {/* Book Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {bookDetails.title}
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {bookDetails.description}
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-8">
              {bookDetails.highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700 font-medium">{highlight}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-primary-700 hover:shadow-xl flex items-center justify-center gap-2"
              >
                Adquirir Livro
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('contato')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group bg-transparent border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-primary-600 hover:text-white flex items-center justify-center gap-2"
              >
                Mais Informações
                <BookOpen size={20} className="group-hover:rotate-12 transition-transform" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              O que você vai descobrir
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Benefícios transformadores que esta obra proporcionará em sua jornada de desenvolvimento pessoal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100/50"
              >
                <div className="bg-primary-100 p-3 rounded-full w-fit mb-4 group-hover:bg-primary-200 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              O que dizem os leitores
            </h3>
            <p className="text-primary-100 text-lg max-w-2xl mx-auto">
              Depoimentos reais de pessoas que foram transformadas pela leitura de "O Peso do Desejo"
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {bookDetails.quotes.map((quote, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 * index }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <Quote className="w-8 h-8 text-accent-300 mb-4" />
                <p className="text-white/90 leading-relaxed mb-4 italic">
                  "{quote}"
                </p>
                <div className="flex items-center gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}