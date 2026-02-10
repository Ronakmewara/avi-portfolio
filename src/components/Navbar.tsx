'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'
import Link from 'next/link'


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  
  // Enhanced glass morphism effect
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.7)']
  )
  
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(8px)', 'blur(24px)']
  )

  const borderOpacity = useTransform(
    scrollY,
    [0, 100],
    [0.1, 0.3]
  )

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (y) => {
      setIsScrolled(y > 50)
    })
    return () => unsubscribe()
  }, [scrollY])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      <motion.nav
        style={{
          backgroundColor,
          backdropFilter: backdropBlur,
          WebkitBackdropFilter: backdropBlur,
        }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      >
        {/* Subtle top border with gradient */}
        <motion.div
          style={{ opacity: borderOpacity }}
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af76]/40 to-transparent"
        />

        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
          {/* Main Navbar Container - Floating Glass Effect */}
          <div className="flex items-center justify-between h-20 md:h-24">
            
            {/* Logo with premium hover effect */}
            <motion.a
              href="/"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="group relative flex items-center"
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-[#d4af76]/0 via-[#b38b5d]/0 to-[#d4af76]/0 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                whileHover={{ scale: 1.2 }}
              />
              
              <div className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center">
                <motion.img
                  src="/logo/picturebyavi_logo.png"
                  alt="PictureByAvi Logo"
                  className="w-full h-full object-contain drop-shadow-lg"
                  whileHover={{ scale: 1.08, rotate: 5 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </motion.a>

            {/* Desktop Navigation - Floating Glass Pill */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex items-center gap-2"
            >
              {/* Premium frosted glass container */}
              <motion.div 
                className={`relative flex items-center gap-1 px-4 py-2.5 rounded-full border backdrop-blur-xl transition-all duration-500 ${
                  isScrolled 
                    ? 'bg-white/50 border-[#d4af76]/20 shadow-lg shadow-[#b38b5d]/5' 
                    : 'bg-white/30 border-white/20 shadow-2xl shadow-black/5'
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Subtle inner glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#d4af76]/5 via-transparent to-[#b38b5d]/5" />
                
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index + 0.3 }}
                    className="group relative px-5 py-2.5 rounded-full text-sm font-bold text-neutral-700 hover:text-neutral-900 transition-all duration-300"
                  >
                    <span className="relative z-10">{link.name}</span>
                    
                    {/* Luxury hover background - gold shimmer */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-br from-[#d4af76]/20 via-[#b38b5d]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                      whileHover={{ scale: 1.05 }}
                    />
                    
                    {/* Active indicator - refined gold dot */}
                    <motion.div
                      className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gradient-to-r from-[#d4af76] to-[#b38b5d] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm shadow-[#d4af76]"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                    />
                  </motion.a>   
                ))}
              </motion.div>
            </motion.div>

            {/* CTA Button + Mobile Menu */}
            <div className="flex items-center gap-3 md:gap-4">
              {/* Premium CTA Button - Desktop */}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white text-sm font-bold rounded-full hover:from-[#b38b5d] hover:via-[#a07a52] hover:to-[#8b6f47] transition-all duration-500 shadow-xl shadow-neutral-900/20 hover:shadow-2xl hover:shadow-[#b38b5d]/30 backdrop-blur-sm relative overflow-hidden group"
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{
                    x: ['-200%', '200%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
                
                <span className="relative uppercase tracking-wider">Let's Talk</span>
                <motion.div 
                  className="relative w-2 h-2 rounded-full bg-white shadow-lg shadow-white/50"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.7, 1] 
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                />
              </motion.a>

              {/* Luxury Mobile Menu Button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="lg:hidden relative w-12 h-12 flex items-center justify-center rounded-full bg-white/40 backdrop-blur-xl border border-white/30 shadow-xl shadow-black/5 hover:bg-white/60 hover:border-[#d4af76]/30 transition-all duration-300 group"
              >
                {/* Button glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#d4af76]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-5 h-5 text-neutral-900" strokeWidth={2.5} />
                  ) : (
                    <Menu className="w-5 h-5 text-neutral-900" strokeWidth={2.5} />
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay - Premium Edition */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.4 }}
        className={`fixed inset-0 z-40 lg:hidden ${
          isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* Luxury backdrop with blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-gradient-to-br from-neutral-900/80 via-neutral-800/70 to-neutral-900/80 backdrop-blur-2xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Premium Menu Panel */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: isMobileMenuOpen ? 0 : '100%' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-gradient-to-br from-white via-amber-50/30 to-white shadow-2xl shadow-black/20"
        >
          {/* Decorative gold accent bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#d4af76] via-[#b38b5d] to-[#d4af76]" />
          
          <div className="flex flex-col h-full p-8 pt-28">
            {/* Navigation Links */}
            <nav className="flex flex-col gap-2 mb-12">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    x: isMobileMenuOpen ? 0 : 30,
                  }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.1 * index,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group relative flex items-center gap-4 px-6 py-4 rounded-2xl hover:bg-gradient-to-r hover:from-[#d4af76]/10 hover:to-transparent transition-all duration-300"
                >
                  {/* Animated gold line */}
                  <motion.div 
                    className="w-0 h-0.5 bg-gradient-to-r from-[#d4af76] to-[#b38b5d] group-hover:w-10 transition-all duration-500 shadow-sm shadow-[#d4af76]/50"
                  />
                  
                  <span className="text-2xl font-bold text-neutral-900 group-hover:text-[#b38b5d] transition-colors duration-300">
                    {link.name}
                  </span>
                  
                  {/* Sparkle effect on hover */}
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ rotate: 180, scale: 1.2 }}
                  >
                    <Sparkles className="w-4 h-4 text-[#d4af76]" />
                  </motion.div>
                </motion.a>
              ))}
            </nav>

            {/* Premium Mobile CTA */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                y: isMobileMenuOpen ? 0 : 20,
              }}
              transition={{ duration: 0.5, delay: 0.5 }}
              onClick={() => setIsMobileMenuOpen(false)}
              whileTap={{ scale: 0.95 }}
              className="relative flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white text-sm font-bold rounded-2xl hover:from-[#b38b5d] hover:via-[#a07a52] hover:to-[#8b6f47] transition-all duration-500 shadow-2xl shadow-neutral-900/30 overflow-hidden group"
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{
                  x: ['-200%', '200%'],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              
              <span className="relative uppercase tracking-wider">Let's Talk</span>
              <motion.div 
                className="relative w-2 h-2 rounded-full bg-white shadow-lg"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.6, 1] 
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity 
                }}
              />
            </motion.a>

            {/* Luxury Mobile Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-auto pt-8 border-t border-[#d4af76]/20"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-px bg-gradient-to-r from-[#d4af76] to-transparent" />
                <p className="text-xs text-[#b38b5d] uppercase tracking-[0.2em] font-bold">
                  Available for projects
                </p>
              </div>
              <p className="text-sm text-neutral-700 font-medium">
                Let's create something amazing together
              </p>
              
              {/* Decorative element */}
              <div className="mt-4 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[#d4af76] to-[#b38b5d]" />
                <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[#b38b5d] to-[#8b6f47]" />
                <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[#d4af76] to-[#b38b5d]" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}