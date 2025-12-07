import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0C0A09] border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {!logoError ? (
                <img 
                  src="/Logo.png" 
                  alt="MensConcept Logo" 
                  className="h-8 md:h-10 lg:h-12 w-auto"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <span className="text-white text-xl md:text-2xl lg:text-3xl font-heading font-bold uppercase tracking-tight">
                  MENS&apos; CONCEPT
                </span>
              )}
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white text-xs md:text-sm uppercase tracking-[0.15em] font-body mt-1 text-center"
            >
              
            </motion.p>
          </div>

          {/* Icons Section */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-[#DD9E32] transition-colors"
              aria-label="Shopping bag"
            >
              <svg 
                className="w-6 h-6 md:w-7 md:h-7" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
                />
              </svg>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white hover:text-[#DD9E32] transition-colors"
              aria-label="Menu"
            >
              <svg 
                className="w-6 h-6 md:w-7 md:h-7" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                )}
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 overflow-hidden"
            >
              <div className="flex flex-col gap-4 py-4">
                <a href="/" className="text-white hover:text-[#DD9E32] transition-colors font-body">
                  Home
                </a>
                <a href="/about" className="text-white hover:text-[#DD9E32] transition-colors font-body">
                  About
                </a>
                <a href="/services" className="text-white hover:text-[#DD9E32] transition-colors font-body">
                  Services
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

