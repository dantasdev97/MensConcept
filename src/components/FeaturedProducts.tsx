import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import { products, getProductsOnSale, getFeaturedProducts, getNewProducts } from '../data/products'

export default function FeaturedProducts() {
  const [selectedProducts, setSelectedProducts] = useState<typeof products>([])

  useEffect(() => {
    // Selecionar 4 produtos para destacar: combinação de produtos em promoção, mais vendidos e novos
    const saleProducts = getProductsOnSale()
    const featuredProducts = getFeaturedProducts()
    const newProducts = getNewProducts()

    // Combinar e remover duplicatas
    const combined = [...saleProducts, ...featuredProducts, ...newProducts]
    const unique = combined.filter((product, index, self) =>
      index === self.findIndex(p => p.id === product.id)
    )

    // Pegar os primeiros 4 produtos
    setSelectedProducts(unique.slice(0, 4))
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="relative z-10 py-20 bg-[#0C0A09] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
            Premium Men's <motion.span
              className="text-[#DD9E32]"
              animate={{
                textShadow: [
                  "0 0 20px rgba(221, 158, 50, 0.5)",
                  "0 0 30px rgba(221, 158, 50, 0.8)",
                  "0 0 20px rgba(221, 158, 50, 0.5)"
                ]
              }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              Grooming
            </motion.span> Products
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 font-body max-w-3xl mx-auto"
          >
            Discover our <motion.span
              className="text-[#DD9E32] font-semibold"
              animate={{
                textShadow: [
                  "0 0 15px rgba(221, 158, 50, 0.4)",
                  "0 0 25px rgba(221, 158, 50, 0.7)",
                  "0 0 15px rgba(221, 158, 50, 0.4)"
                ]
              }}
              transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}
            >
              premium selection
            </motion.span> of professional grooming products.
            Enhance your style with confidence and sophistication.
          </motion.p>
        </motion.div>

        {/* Products Grid - Desktop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {selectedProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="h-full"
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        {/* Products Carousel - Mobile */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            {/* Gradient overlays for scroll indication */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#0C0A09] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#0C0A09] to-transparent z-10 pointer-events-none"></div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-2"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {selectedProducts.map((product) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  className="flex-shrink-0 w-80"
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center mt-6"
          >
            <div className="flex items-center gap-2 text-sm text-white/60 font-body">
              <span>Swipe to explore more products</span>
              <motion.svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </motion.svg>
            </div>
          </motion.div>
        </div>

        {/* Additional Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12"
        >
          <p className="text-white/80 font-body text-lg max-w-2xl mx-auto">
            Experience the ultimate grooming ritual at Men's Concept. From precision cuts to expert product recommendations,
            we deliver unparalleled service in Luxembourg's premier barbershop destination.
          </p>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Book Appointment Button */}
            <motion.a
              href="https://salonkee.lu/salon/men-s-concept-barber-shop"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-[#DD9E32] text-white uppercase tracking-wider font-heading font-bold rounded-lg flex items-center gap-3 hover:bg-[#C88A1F] transition-all shadow-lg shadow-[#DD9E32]/30 hover:shadow-xl hover:shadow-[#DD9E32]/40"
            >
              <span className="text-lg">Book Appointment</span>
              <motion.svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                initial={{ x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </motion.svg>
            </motion.a>

            {/* View Products Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 border-2 border-[#DD9E32] text-[#DD9E32] uppercase tracking-wider font-heading font-bold rounded-lg flex items-center gap-3 hover:bg-[#DD9E32] hover:text-white transition-all shadow-lg hover:shadow-xl"
            >
              <span className="text-lg">View All Products</span>
              <motion.svg
                className="w-5 h-5"
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
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}