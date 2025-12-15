import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import Header from '../components/Header'

export default function About() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const galleryImages = [
    '/images/sala1.jpg',
    '/images/sala2.jpg',
    '/images/sala3.jpg',
    '/images/sala4.jpg',
    '/images/sala5.jpg',
    '/images/sala6.jpg',
    '/images/sala7.jpg',
    '/images/sala8.jpg',
    '/images/sala9.jpg'
  ]

  const enterFullscreen = async () => {
    if (videoRef.current && document.fullscreenEnabled) {
      try {
        if (videoRef.current.requestFullscreen) {
          await videoRef.current.requestFullscreen()
        } else if ((videoRef.current as any).webkitRequestFullscreen) {
          await (videoRef.current as any).webkitRequestFullscreen()
        } else if ((videoRef.current as any).mozRequestFullScreen) {
          await (videoRef.current as any).mozRequestFullScreen()
        } else if ((videoRef.current as any).msRequestFullscreen) {
          await (videoRef.current as any).msRequestFullscreen()
        }
        setIsFullscreen(true)
      } catch (fullscreenError) {
        console.log('Fullscreen not supported or failed:', fullscreenError)
      }
    }
  }

  const exitFullscreen = async () => {
    try {
      if (document.exitFullscreen) {
        await document.exitFullscreen()
      } else if ((document as any).webkitExitFullscreen) {
        await (document as any).webkitExitFullscreen()
      } else if ((document as any).mozCancelFullScreen) {
        await (document as any).mozCancelFullScreen()
      } else if ((document as any).msExitFullscreen) {
        await (document as any).msExitFullscreen()
      }
      setIsFullscreen(false)
    } catch (error) {
      console.log('Error exiting fullscreen:', error)
    }
  }

  const handlePlayVideo = async () => {
    if (videoRef.current) {
      try {
        // Remove muted to enable audio
        videoRef.current.muted = false

        // Start playing
        await videoRef.current.play()
        setIsVideoPlaying(true)

        // Request fullscreen after a short delay to ensure video is playing
        setTimeout(() => {
          enterFullscreen()
        }, 100)

      } catch (error) {
        console.error('Error playing video:', error)
      }
    }
  }

  const handleVideoPause = () => {
    setIsVideoPlaying(false)
    // Exit fullscreen when video is paused
    if (isFullscreen) {
      exitFullscreen()
    }
  }

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isCurrentlyFullscreen = !!(
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).mozFullScreenElement ||
        (document as any).msFullscreenElement
      )
      setIsFullscreen(isCurrentlyFullscreen)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange)
    document.addEventListener('mozfullscreenchange', handleFullscreenChange)
    document.addEventListener('MSFullscreenChange', handleFullscreenChange)

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange)
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange)
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange)
    }
  }, [])

  // Auto fullscreen when video starts playing (for any play event)
  const handleVideoPlay = () => {
    setIsVideoPlaying(true)
    // Enter fullscreen when video starts playing (with a slight delay)
    setTimeout(() => {
      if (!isFullscreen) {
        enterFullscreen()
      }
    }, 100)
  }

  return (
    <div className="min-h-screen bg-[#0C0A09] text-white">
      <Header />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-32 bg-gradient-to-br from-[#0C0A09] via-[#1a1816] to-[#0C0A09]"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-heading font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            >
              Men&apos;s Concept
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-24 h-1 bg-[#DD9E32] mx-auto mb-8"
            />
          </div>
        </div>
      </motion.div>

      {/* Modern Concept Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.0 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-br from-[#1a1816] to-[#0C0A09]"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                Our <span className="text-[#DD9E32]">Legacy</span> & Vision
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Discover the story behind Men&apos;s Concept Luxembourg - where tradition meets innovation
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-[#DD9E32] to-[#C88A1F] mx-auto mt-8 rounded-full"></div>
            </motion.div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Animated Text */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-white/90 leading-relaxed"
                >
                  <h3 className="text-2xl font-heading font-bold text-[#DD9E32] mb-4">
                    Men&apos;s Concept Luxembourg
                  </h3>
                  <p className="text-lg mb-6">
                    Men&apos;s Concept was born in Luxembourg as a natural extension of an already consolidated success story in Portugal. Our founder, a renowned barber and entrepreneur in the industry, has built a career marked by <span className="text-[#DD9E32] font-semibold">excellence, innovation and passion</span> for men&apos;s care.
                  </p>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-lg text-white/90 border-l-4 border-[#DD9E32] pl-6 py-4 bg-white/5 rounded-r-lg"
                >
                  In Portugal, he became a reference by creating one of the country&apos;s most recognized barber shop brands, distinguished by <span className="text-[#DD9E32] font-semibold">premium product quality, refined techniques, and exceptional service</span>.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="text-lg text-white/90"
                >
                  With the ambition to bring this vision beyond borders, he chose to invest in Luxembourg and introduce the concept that made him a leading name. Men&apos;s Concept Luxembourg offers a modern barber shop experience, focused on <span className="text-[#DD9E32] font-semibold">superior quality, premium services, and truly personalized attention</span>.
                </motion.p>
              </motion.div>

              {/* Right Side - Visual Elements */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#DD9E32]/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#C88A1F]/20 rounded-full blur-xl"></div>

                {/* Main Content Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 relative overflow-hidden"
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#DD9E32] rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#C88A1F] rounded-full translate-y-12 -translate-x-12"></div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="relative z-10"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-[#DD9E32] to-[#C88A1F] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>

                    <h4 className="text-2xl font-heading font-bold text-white text-center mb-4">
                      Premium Experience
                    </h4>

                    <div className="space-y-4 text-white/80">
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                        viewport={{ once: true }}
                        className="text-center"
                      >
                        Here, every detail matters: from <span className="text-[#DD9E32] font-semibold">exclusive professional products</span> to techniques that blend tradition and trend.
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        viewport={{ once: true }}
                        className="bg-[#DD9E32]/10 rounded-xl p-4 border border-[#DD9E32]/20"
                      >
                        <p className="text-center font-heading font-semibold text-[#DD9E32]">
                          The goal is simple: to offer clients high-level service where care, precision, and style unite to create a unique experience.
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Final Statement */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  viewport={{ once: true }}
                  className="mt-8 text-center"
                >
                  <p className="text-2xl font-heading font-bold text-white leading-tight">
                    Men&apos;s Concept Luxembourg:
                    <span className="block text-[#DD9E32] mt-2">
                      More than a barber shop, a concept designed for those who appreciate quality, trust, and authenticity.
                    </span>
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* SEO-Optimized Keywords Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { keyword: "Luxury Barber Shop", icon: "✂️" },
                { keyword: "Men's Grooming", icon: "💇‍♂️" },
                { keyword: "Premium Services", icon: "⭐" },
                { keyword: "Traditional Techniques", icon: "🪒" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#DD9E32]/30 transition-colors duration-300 group"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <p className="text-white/80 font-heading font-medium text-sm">
                    {item.keyword}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Gallery Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.0 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-br from-[#1a1816] via-[#0C0A09] to-[#1a1816]"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
              Our Modern Space
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-4">
              Explore our contemporary barber shop environment designed for the modern gentleman
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-[#DD9E32] to-[#C88A1F] mx-auto rounded-full"></div>
          </motion.div>

          {/* Modern Horizontal Scroll Gallery */}
          <div className="relative max-w-full mx-auto">
            {/* Scroll Container */}
            <div className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-8 px-4"
                 style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  className="group relative flex-shrink-0 w-80 h-80 overflow-hidden rounded-3xl shadow-2xl hover:shadow-[#DD9E32]/20 transition-all duration-500"
                >
                  <div className="relative overflow-hidden w-full h-full">
                    <motion.img
                      src={image}
                      alt={`Barber Shop Space ${index + 1}`}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      whileHover={{
                        scale: 1.1,
                        filter: "brightness(1.1) contrast(1.05)"
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = 'https://via.placeholder.com/320x320/0C0A09/DD9E32?text=Modern+Space'
                      }}
                    />

                    {/* Overlay Effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                    {/* Hover Border */}
                    <div className="absolute inset-0 border-2 border-[#DD9E32]/0 group-hover:border-[#DD9E32]/60 rounded-3xl transition-all duration-500" />

                    {/* Floating Label */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-4 left-4 right-4"
                    >
                      <div className="bg-black/70 backdrop-blur-sm rounded-2xl px-4 py-3 border border-white/20">
                        <p className="text-white font-heading font-semibold text-sm">
                          Premium Experience
                        </p>
                      </div>
                    </motion.div>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              viewport={{ once: true }}
              className="flex justify-center mt-8"
            >
              <div className="flex items-center gap-2 text-white/60">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                <span className="text-sm font-body">Scroll to explore</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>

            {/* Progress Indicator Dots */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              viewport={{ once: true }}
              className="flex justify-center mt-6 gap-2"
            >
              {galleryImages.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 bg-white/30 rounded-full transition-all duration-300 hover:bg-[#DD9E32]/60"
                />
              ))}
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: "500+", label: "Happy Clients" },
              { number: "5+", label: "Years Experience" },
              { number: "100%", label: "Premium Quality" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#DD9E32] to-[#C88A1F] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-heading font-bold text-white">
                    {stat.number}
                  </span>
                </div>
                <p className="text-white/80 font-heading font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Video CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.0 }}
        viewport={{ once: true }}
        className="py-32 md:py-20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                Hair Transplantation
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
                Discover our expertise in hair transplantation to regain confidence and natural hair
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#DD9E32]/20 to-[#C88A1F]/20"
            >
              <div className="aspect-video bg-gray-900 relative group">
                {/* Video Player */}
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover rounded-2xl"
                  controls
                  poster="https://via.placeholder.com/800x450/0C0A09/DD9E32?text=Hair+Transplantation+Process"
                  preload="none"
                  playsInline
                  onPlay={handleVideoPlay}
                  onPause={handleVideoPause}
                  onEnded={handleVideoPause}
                >
                  <source src="/videos/biker.mp4" type="video/mp4" />
                  <source src="/videos/video-banner.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Video Overlay Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-2xl">
                  <div className="absolute bottom-6 left-6 right-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="bg-black/60 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                    >
                      <h4 className="text-white font-heading font-bold text-lg mb-2">
                        Advanced Hair Restoration
                      </h4>
                      <p className="text-white/80 text-sm">
                        Watch our cutting-edge hair transplantation techniques and client success stories
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* Play Button Overlay */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                  isVideoPlaying ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handlePlayVideo}
                    className="w-16 h-16 bg-[#DD9E32]/90 hover:bg-[#DD9E32] rounded-full flex items-center justify-center shadow-xl cursor-pointer"
                  >
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </motion.div>
                </div>

                {/* Exit Fullscreen Button */}
                {isFullscreen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute top-4 right-4 z-50"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={exitFullscreen}
                      className="w-12 h-12 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center shadow-xl backdrop-blur-sm transition-colors duration-300"
                      aria-label="Exit fullscreen"
                    >
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </motion.button>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Features Cards Section - Separated from Video */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                { icon: "🧬", title: "FUE Technique", desc: "Follicular Unit Extraction" },
                { icon: "🎯", title: "Precision", desc: "Natural hairline design" },
                { icon: "⭐", title: "Results", desc: "Permanent & natural" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#DD9E32]/30 transition-colors duration-300"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h4 className="text-white font-heading font-semibold mb-2">{feature.title}</h4>
                  <p className="text-white/70 text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button - Separated from Video */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-[#DD9E32] hover:bg-[#C88A1F] text-white rounded-full font-heading font-semibold transition-colors duration-300 shadow-lg text-lg"
              >
                Schedule Consultation
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-r from-[#DD9E32]/10 to-[#C88A1F]/10"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-heading font-bold text-white mb-6"
            >
              Ready to experience Men&apos;s Concept?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-white/70 mb-8"
            >
              Book your appointment today and discover the best of men&apos;s care in Luxembourg.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/services"
                className="px-8 py-4 bg-[#DD9E32] hover:bg-[#C88A1F] text-white rounded-full font-heading font-semibold transition-colors duration-300 shadow-lg text-center"
              >
                Our Services
              </Link>
        <Link 
                to="/products"
                className="px-8 py-4 border-2 border-[#DD9E32] text-[#DD9E32] hover:bg-[#DD9E32] hover:text-white rounded-full font-heading font-semibold transition-all duration-300 text-center"
        >
                Our Products
        </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

