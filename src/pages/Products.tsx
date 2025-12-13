import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import ProductGrid from '../components/ProductGrid'

export default function Products() {
  const [isFullscreen, setIsFullscreen] = useState(false)

  const handleFullscreenVideo = () => {
    setIsFullscreen(true)
  }

  const handleCloseFullscreen = () => {
    setIsFullscreen(false)
  }

  // SEO setup
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined' || !document) return

    document.title = "Premium Grooming Products | Men's Concept - Luxembourg"

    // Meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    metaDescription.setAttribute('content', "Discover our premium collection of men's grooming products. Professional quality waxes, shampoos, scissors and more. Shop now at Men's Concept in Luxembourg.")

    // Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]')
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta')
      metaKeywords.setAttribute('name', 'keywords')
      document.head.appendChild(metaKeywords)
    }
    metaKeywords.setAttribute('content', "men's grooming products, barber supplies, hair wax, beard products, professional scissors, Luxembourg")

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: "Premium Grooming Products | Men's Concept" },
      { property: 'og:description', content: "Professional quality grooming products for modern men in Luxembourg." },
      { property: 'og:image', content: '/Logo.png' },
      { property: 'og:url', content: 'https://mensconcept.lu/products' },
      { name: 'twitter:card', content: 'summary_large_image' }
    ]

    ogTags.forEach(({ property, name, content }) => {
      const attr = property ? 'property' : 'name'
      const value = property || name
      if (!value) return // Skip if neither property nor name is defined

      let tag = document.querySelector(`meta[${attr}="${value}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute(attr, value)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    })

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://mensconcept.lu/products')

    return () => {
      // Cleanup on unmount
      if (typeof window !== 'undefined' && document) {
        document.title = 'Men\'s Concept'
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#0C0A09]">
        {/* Header */}
        <Header />

        {/* Products Hero Card */}
        <section className="relative py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-b-3xl overflow-hidden shadow-2xl"
          >
              {/* Video Background */}
              <div className="absolute inset-0 z-0">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
              className="w-full h-full object-cover"
              onError={(e) => {
                console.warn('Video failed to load:', e)
                const target = e.target as HTMLVideoElement
                target.style.display = 'none'
              }}
                >
                  <source src="/videos/video-banner.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* Dark overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0C0A09]/90 via-[#0C0A09]/80 to-[#0C0A09]/70"></div>
                {/* Additional gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 px-0 py-8 md:py-12 lg:py-16">
                <div className="max-w-2xl mx-auto text-center">
                  {/* Title */}
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-8"
                  >
                    MEN'S CONCEPT
                    <span className="block text-[#DD9E32]">PRODUCTS</span>
                  </motion.h1>

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                  >
                    {/* Play Video Button */}
                    <motion.button
                      onClick={handleFullscreenVideo}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-3 px-8 py-4 bg-[#DD9E32] hover:bg-[#C88A1F] text-white font-heading font-semibold rounded-full transition-all duration-300 shadow-lg shadow-[#DD9E32]/30"
                      aria-label="Watch video in fullscreen"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                      <span>Watch Video</span>
                    </motion.button>

                    {/* Explore Products Button */}
                    <motion.button
                      onClick={() => {
                        document.getElementById('products-section')?.scrollIntoView({
                          behavior: 'smooth',
                          block: 'start'
                        })
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-heading font-semibold rounded-full transition-all duration-300 border border-white/30"
                    >
                      Explore Products ↓
                    </motion.button>
                  </motion.div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-[#DD9E32] rounded-full opacity-60"></div>
              <div className="absolute top-1/2 left-4 w-1 h-1 bg-[#DD9E32] rounded-full opacity-30"></div>

              {/* Bottom circular effect for emergence */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <div className="w-24 h-12 bg-[#0C0A09] rounded-t-full opacity-80"></div>
              </div>
            </motion.div>
        </section>

        {/* Fullscreen Video Modal */}
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
            onClick={handleCloseFullscreen}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              onClick={handleCloseFullscreen}
              className="absolute top-6 right-6 z-60 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-300"
              aria-label="Close fullscreen video"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {/* Fullscreen Video */}
            <video
              autoPlay
              controls
              className="w-full h-full object-contain"
              onLoadedData={() => console.log('Fullscreen video loaded')}
              onError={(e) => {
                console.warn('Fullscreen video failed to load:', e)
                handleCloseFullscreen()
              }}
            >
              <source src="/videos/video-banner.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Click overlay hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/70 text-sm font-body"
            >
              Click anywhere to close
            </motion.div>
          </motion.div>
        )}

        {/* Products Section */}
        <section id="products-section" className="relative z-10 bg-[#0C0A09]">
          <ProductGrid />
        </section>
    </div>
  )
}

