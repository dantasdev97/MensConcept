import { motion, useAnimation } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import Header from '../components/Header'
import Gallery from '../components/Gallery'
import FeaturedProducts from '../components/FeaturedProducts'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { useGoogleReviews } from '../hooks/useGoogleReviews'

export default function Home() {
  const { reviews, rating: _rating, loading: _loading, error: _error } = useGoogleReviews()

  // Estados para controle de scroll manual
  const [isUserInteracting, setIsUserInteracting] = useState(false)
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true)
  const topRowRef = useRef<HTMLDivElement>(null)
  const bottomRowRef = useRef<HTMLDivElement>(null)
  const topAnimationControls = useAnimation()
  const bottomAnimationControls = useAnimation()

  // Animation duration - faster on mobile
  const animationDuration = 60 // 60 seconds for auto scroll

  // Limitar a 14 reviews reais, dividido em duas fileiras de 7 cada
  const maxReviews = 14
  const displayedReviews = reviews.slice(0, maxReviews)
  const topRowReviews = displayedReviews.slice(0, 7) // Primeiros 7 para fileira superior
  const bottomRowReviews = displayedReviews.slice(7, 14) // Próximos 7 para fileira inferior

  // Handlers para interação do usuário
  const handleInteractionStart = () => {
    setIsUserInteracting(true)
    setAutoScrollEnabled(false)
  }

  const handleInteractionEnd = () => {
    setIsUserInteracting(false)
    // Retomar auto-scroll após 3 segundos
    setTimeout(() => {
      setAutoScrollEnabled(true)
    }, 3000)
  }

  // Efeito para controlar a animação automática das duas fileiras
  useEffect(() => {
    if (autoScrollEnabled && !isUserInteracting) {
      // Fileira superior: movimento para a direita (0% para -50%)
      topAnimationControls.start({
        x: ["0%", "-50%"],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: animationDuration,
            ease: "linear",
          },
        },
      })

      // Fileira inferior: movimento para a esquerda (-50% para 0%)
      bottomAnimationControls.start({
        x: ["-50%", "0%"],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: animationDuration,
            ease: "linear",
          },
        },
      })
    } else {
      topAnimationControls.stop()
      bottomAnimationControls.stop()
    }
  }, [autoScrollEnabled, isUserInteracting, topAnimationControls, bottomAnimationControls, animationDuration])

  return (
    <>
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
          <source src="/videos/bannervideo.mp4" type="video/mp4" />
        </video>
        {/* Overlay com sombra leve */}
        <div className="absolute inset-0 bg-[#0C0A09]/80 backdrop-blur-[1px]"></div>
        {/* Sombra de baixo para cima no fim do vídeo */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0C0A09] via-[#0C0A09]/60 to-transparent"></div>
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
            className="text-[#DD9E32] text-sm md:text-base uppercase tracking-[0.2em] font-body mb-6"
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
            {/* Shop Products Button */}
            <motion.a
              href="/products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm text-white uppercase tracking-wider font-heading font-semibold rounded-full flex items-center gap-3 hover:bg-white/20 transition-all border border-white/30 hover:border-white/50"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="text-base md:text-lg">SHOP PRODUCTS</span>
              <motion.svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                initial={{ x: 0 }}
                animate={{ x: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </motion.svg>
            </motion.a>

            {/* Book Appointment Button - Smaller */}
            <motion.a
              href="https://salonkee.lu/salon/men-s-concept-barber-shop"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-6 py-3 bg-[#DD9E32] text-white uppercase tracking-wider font-heading font-bold rounded-lg flex items-center gap-2 hover:bg-[#C88A1F] transition-all shadow-lg shadow-[#DD9E32]/30 hover:shadow-xl hover:shadow-[#DD9E32]/40"
            >
              <span className="text-sm md:text-base">BOOK APPOINTMENT</span>
              <motion.svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                initial={{ x: 0 }}
                animate={{ x: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </motion.svg>
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          >
            <div className="relative">
              {/* Círculo com blur de fundo */}
              <div className="absolute inset-0 w-14 h-14 bg-white/10 backdrop-blur-md rounded-full -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2"></div>
              <motion.svg
                className="relative w-6 h-6 text-white z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </motion.svg>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    
    {/* Gallery Section */}
    <Gallery />

    {/* Featured Products Section */}
    <FeaturedProducts />

    {/* Testemunhos Modernos */}
    <section className="relative z-10 py-20 bg-[#0C0A09] overflow-hidden before:absolute before:inset-y-0 before:left-0 before:w-32 before:bg-gradient-to-r before:from-[#0C0A09] before:to-transparent before:z-20 after:absolute after:inset-y-0 after:right-0 after:w-32 after:bg-gradient-to-l after:from-[#0C0A09] after:to-transparent after:z-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4"
          >
            What our clients say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 font-body mb-8"
          >
            Real reviews from our satisfied customers
          </motion.p>
        </div>

        {/* Testimonials - Top Row (moves right) */}
        <div className="mb-6 overflow-hidden">
          <div
            ref={topRowRef}
            className="relative overflow-hidden cursor-grab active:cursor-grabbing"
            onMouseDown={handleInteractionStart}
            onMouseUp={handleInteractionEnd}
            onMouseLeave={handleInteractionEnd}
            onTouchStart={handleInteractionStart}
            onTouchEnd={handleInteractionEnd}
          >
            <motion.div
              className="flex gap-6"
              animate={topAnimationControls}
              drag="x"
              dragConstraints={{ left: -((topRowReviews.length * 296) - window.innerWidth + 64), right: 0 }}
              dragElastic={0.1}
              dragMomentum={false}
              onDragStart={handleInteractionStart}
              onDragEnd={handleInteractionEnd}
              style={{ width: `${topRowReviews.length * 296}px` }}
            >
              {topRowReviews.map((review, _index) => ({
                text: review?.text || "Great service and professional staff!",
                name: review?.author_name || "Client",
                role: review?.relative_time_description || "Customer",
                initials: review?.author_name?.split(' ').map(n => n[0]).join('') || "C",
                profilePhoto: review?.profile_photo_url,
              })).map((testimonial, testimonialIndex) => (
                <div key={`top-${testimonialIndex}`} className="flex-shrink-0 w-[280px]">
                  <Card className="shadow-lg rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-sm h-full">
                    <CardContent className="flex flex-col gap-4 p-0">
                      <p className="text-white/70 leading-relaxed font-body text-sm line-clamp-3 overflow-hidden">
                        &quot;{testimonial.text}&quot;
                      </p>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={testimonial.profilePhoto} />
                          <AvatarFallback className="bg-white/10 text-white font-heading font-semibold">
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-heading font-semibold text-white">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-white/60 font-body">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
              {/* Duplicate para loop infinito */}
              {topRowReviews.map((review, _index) => ({
                text: review?.text || "Great service and professional staff!",
                name: review?.author_name || "Client",
                role: review?.relative_time_description || "Customer",
                initials: review?.author_name?.split(' ').map(n => n[0]).join('') || "C",
                profilePhoto: review?.profile_photo_url,
              })).map((testimonial, testimonialIndex) => (
                <div key={`top-dup-${testimonialIndex}`} className="flex-shrink-0 w-[280px]">
                  <Card className="shadow-lg rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-sm h-full">
                    <CardContent className="flex flex-col gap-4 p-0">
                      <p className="text-white/70 leading-relaxed font-body text-sm line-clamp-3 overflow-hidden">
                        &quot;{testimonial.text}&quot;
                      </p>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={testimonial.profilePhoto} />
                          <AvatarFallback className="bg-white/10 text-white font-heading font-semibold">
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-heading font-semibold text-white">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-white/60 font-body">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Testimonials - Bottom Row (moves left) */}
        <div className="mb-12 overflow-hidden">
          <div
            ref={bottomRowRef}
            className="relative overflow-hidden cursor-grab active:cursor-grabbing"
            onMouseDown={handleInteractionStart}
            onMouseUp={handleInteractionEnd}
            onMouseLeave={handleInteractionEnd}
            onTouchStart={handleInteractionStart}
            onTouchEnd={handleInteractionEnd}
          >
            <motion.div
              className="flex gap-6"
              animate={bottomAnimationControls}
              drag="x"
              dragConstraints={{ left: -((bottomRowReviews.length * 296) - window.innerWidth + 64), right: 0 }}
              dragElastic={0.1}
              dragMomentum={false}
              onDragStart={handleInteractionStart}
              onDragEnd={handleInteractionEnd}
              style={{ width: `${bottomRowReviews.length * 296}px` }}
            >
              {bottomRowReviews.map((review, _index) => ({
                text: review?.text || "Great service and professional staff!",
                name: review?.author_name || "Client",
                role: review?.relative_time_description || "Customer",
                initials: review?.author_name?.split(' ').map(n => n[0]).join('') || "C",
                profilePhoto: review?.profile_photo_url,
              })).map((testimonial, testimonialIndex) => (
                <div key={`bottom-${testimonialIndex}`} className="flex-shrink-0 w-[280px]">
                  <Card className="shadow-lg rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-sm h-full">
                    <CardContent className="flex flex-col gap-4 p-0">
                      <p className="text-white/70 leading-relaxed font-body text-sm line-clamp-3 overflow-hidden">
                        &quot;{testimonial.text}&quot;
                      </p>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={testimonial.profilePhoto} />
                          <AvatarFallback className="bg-white/10 text-white font-heading font-semibold">
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-heading font-semibold text-white">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-white/60 font-body">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
              {/* Duplicate para loop infinito */}
              {bottomRowReviews.map((review, _index) => ({
                text: review?.text || "Great service and professional staff!",
                name: review?.author_name || "Client",
                role: review?.relative_time_description || "Customer",
                initials: review?.author_name?.split(' ').map(n => n[0]).join('') || "C",
                profilePhoto: review?.profile_photo_url,
              })).map((testimonial, testimonialIndex) => (
                <div key={`bottom-dup-${testimonialIndex}`} className="flex-shrink-0 w-[280px]">
                  <Card className="shadow-lg rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-sm h-full">
                    <CardContent className="flex flex-col gap-4 p-0">
                      <p className="text-white/70 leading-relaxed font-body text-sm line-clamp-3 overflow-hidden">
                        &quot;{testimonial.text}&quot;
                      </p>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={testimonial.profilePhoto} />
                          <AvatarFallback className="bg-white/10 text-white font-heading font-semibold">
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-heading font-semibold text-white">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-white/60 font-body">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Scroll Hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="text-center mt-4"
          >
            <p className="text-white/50 text-sm font-body">
              ← Arraste para ver mais depoimentos →
            </p>
          </motion.div>
        </div>

        {/* Add Google Review Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.a
            href="https://search.google.com/local/writereview?placeid=ChIJ-daHwWJsTgsRi0KGx3fl3hc"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#4285F4] hover:bg-[#3367D6] text-white font-heading font-bold rounded-lg transition-all duration-300 shadow-lg shadow-[#4285F4]/30 hover:shadow-xl hover:shadow-[#4285F4]/40"
          >
            {/* Google Icon SVG */}
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span>Write a Google Review</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
    </>
  )
}
