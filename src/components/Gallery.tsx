import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './Gallery.css'

interface GalleryImage {
  id: number
  src: string
  alt: string
  title: string
  description: string
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/images/gallery-1.jpg',
    alt: 'Premium Haircut Service',
    title: 'Precision Cuts',
    description: 'Expert barbering techniques for the perfect style that matches your personality and lifestyle.'
  },
  {
    id: 2,
    src: '/images/gallery-2.jpg',
    alt: 'Traditional Shave',
    title: 'Classic Shaves',
    description: 'Experience the luxury of traditional straight razor shaves with premium products and techniques.'
  },
  {
    id: 3,
    src: '/images/gallery-3.jpg',
    alt: 'Beard Grooming',
    title: 'Beard Mastery',
    description: 'Professional beard trimming and styling to keep you looking sharp and well-groomed.'
  },
  {
    id: 4,
    src: '/images/gallery-4.jpg',
    alt: 'Modern Fade',
    title: 'Modern Styles',
    description: 'Contemporary fade techniques and trendy cuts that reflect your unique sense of style.'
  },
  {
    id: 5,
    src: '/images/gallery-5.jpg',
    alt: 'Complete Grooming',
    title: 'Full Service',
    description: 'Complete grooming experience combining haircut, beard trim, and premium styling products.'
  }
]

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [swiper, setSwiper] = useState<SwiperType | null>(null)

  useEffect(() => {
    if (swiper) {
      swiper.on('slideChange', () => {
        setActiveIndex(swiper.activeIndex)
      })
    }
  }, [swiper])

  return (
    <section className="relative py-20 md:py-32 bg-[#0C0A09] overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Animated Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#DD9E32] text-sm md:text-base uppercase tracking-[0.2em] font-body mb-4"
          >
            OUR WORK
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6"
          >
            Craftsmanship in
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="block text-[#DD9E32] mt-2"
            >
              Every Detail
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-white/70 text-base md:text-lg font-body max-w-2xl mx-auto"
          >
            Discover our portfolio of exceptional grooming services. Each cut, trim, and style is executed with precision and passion.
          </motion.p>
        </motion.div>

        {/* Gallery Carousel */}
        <div className="relative">
          {/* Sombra lateral esquerda */}
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 lg:w-64 bg-gradient-to-r from-[#0C0A09] via-[#0C0A09]/80 to-transparent z-10 pointer-events-none"></div>
          
          {/* Sombra lateral direita */}
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 lg:w-64 bg-gradient-to-l from-[#0C0A09] via-[#0C0A09]/80 to-transparent z-10 pointer-events-none"></div>
          
          <Swiper
            onSwiper={setSwiper}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
            className="gallery-swiper"
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide key={image.id} className="!w-[300px] md:!w-[400px] lg:!w-[500px]">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="relative overflow-hidden rounded-lg bg-[#0C0A09] border-2 border-[#DD9E32]/20 group-hover:border-[#DD9E32] transition-all duration-300">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-[400px] md:h-[500px] object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = 'https://via.placeholder.com/500x500/0C0A09/DD9E32?text=' + encodeURIComponent(image.title)
                      }}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A09] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <motion.h3
                          initial={{ opacity: 0, y: 20 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          className="text-2xl font-heading font-bold text-white mb-2"
                        >
                          {image.title}
                        </motion.h3>
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                          className="text-white/90 font-body text-sm"
                        >
                          {image.description}
                        </motion.p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Active Slide Info */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center mt-12"
            >
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
                {galleryImages[activeIndex]?.title}
              </h3>
              <p className="text-white/70 font-body max-w-xl mx-auto">
                {galleryImages[activeIndex]?.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

