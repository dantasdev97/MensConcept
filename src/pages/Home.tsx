import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback se o vídeo não carregar
            const target = e.target as HTMLVideoElement
            target.style.display = 'none'
          }}
        >
          <source src="/videos/barbershop-background.mp4" type="video/mp4" />
        </video>
        {/* Overlay com sombra leve */}
        <div className="absolute inset-0 bg-[#0C0A09]/80 backdrop-blur-[1px]"></div>
      </div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="relative z-10 pt-32 pb-20 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Location */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#FF6B9D] text-sm md:text-base uppercase tracking-[0.2em] font-body mb-6"
          >
            LUXEMBOURG CITY
          </motion.p>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-2">
              REDEFINING
            </h1>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-gray-300">
              MASCULINITY
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-white text-base md:text-lg lg:text-xl font-body max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Experience the art of grooming in an urban-premium setting. Precision cuts, traditional shaves, and a style that speaks confidence.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link to="/appointment">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-[#8B1538] text-white uppercase tracking-wider font-body font-medium rounded-md flex items-center gap-2 hover:bg-[#A01842] transition-colors"
              >
                BOOK APPOINTMENT
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ x: 0 }}
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </motion.svg>
              </motion.button>
            </Link>

            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white uppercase tracking-wider font-body font-medium rounded-md hover:bg-white hover:text-[#0C0A09] transition-colors"
              >
                OUR SERVICES
              </motion.button>
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </motion.svg>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
