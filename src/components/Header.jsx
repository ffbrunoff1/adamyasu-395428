import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Instagram, Mail } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-effect shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img 
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/adam-yasu/adam-yasu-logo-full-2025-08-11T17-22-12-821Z.svg" 
              alt="Adam Yasu"
              className={`h-10 lg:h-12 w-auto transition-all duration-300 ${
                isScrolled ? 'filter-none' : 'filter invert'
              }`}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Início', id: 'inicio' },
              { name: 'Sobre', id: 'sobre' },
              { name: 'Livros', id: 'livros' },
              { name: 'Contato', id: 'contato' }
            ].map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
            
            {/* Social Links */}
            <div className="flex items-center space-x-4 ml-6 pl-6 border-l border-gray-300">
              <motion.a
                href="https://instagram.com/adamyasu"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`transition-colors duration-200 ${
                  isScrolled ? 'text-gray-600 hover:text-primary-600' : 'text-white hover:text-accent-300'
                }`}
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="mailto:contato@adamyasu.com"
                whileHover={{ scale: 1.1, rotate: -5 }}
                className={`transition-colors duration-200 ${
                  isScrolled ? 'text-gray-600 hover:text-primary-600' : 'text-white hover:text-accent-300'
                }`}
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white rounded-lg shadow-lg mt-2"
        >
          <div className="px-4 py-6 space-y-4">
            {[
              { name: 'Início', id: 'inicio' },
              { name: 'Sobre', id: 'sobre' },
              { name: 'Livros', id: 'livros' },
              { name: 'Contato', id: 'contato' }
            ].map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-gray-700 hover:text-primary-600 transition-colors duration-200 py-2"
                whileHover={{ x: 10 }}
              >
                {item.name}
              </motion.button>
            ))}
            
            <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
              <motion.a
                href="https://instagram.com/adamyasu"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="mailto:contato@adamyasu.com"
                whileHover={{ scale: 1.1 }}
                className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}