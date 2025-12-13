import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import ProductCard from './ProductCard'
import { products, getUniqueCategories, getProductsByCategory } from '../data/products'

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const categories = ['All', ...getUniqueCategories()]

  const filteredProducts = selectedCategory === 'All'
    ? products
    : getProductsByCategory(selectedCategory)

  // Ícones para cada categoria
  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      'All': '🛍️',
      'Wax': '🧼',
      'Shampoo': '🧴',
      'Scissors': '✂️',
      'Spray': '💨'
    }
    return icons[category] || '📦'
  }


  return (
    <div className="w-full px-4 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
          Our Products
        </h1>
        <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Discover our premium grooming collection designed for the modern gentleman.
          Professional quality products for exceptional care and style.
        </p>
      </motion.div>

      {/* Category Filters - Modern Scrollable */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative mb-16 max-w-5xl mx-auto"
      >
        {/* Categories Container - Centered */}
        <div className="flex justify-center">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide px-4 py-4 max-w-4xl"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`flex-shrink-0 flex items-center gap-3 px-6 py-4 rounded-2xl font-heading font-semibold transition-all duration-300 shadow-lg ${
                  selectedCategory === category
                    ? 'bg-white/20 text-white shadow-white/20 backdrop-blur-sm border border-white/30'
                    : 'bg-white/5 text-white/80 hover:bg-white/10 hover:text-white backdrop-blur-sm hover:shadow-xl'
                }`}
              >
                <span className="text-2xl">{getCategoryIcon(category)}</span>
                <span className="whitespace-nowrap">{category}</span>
                {selectedCategory === category && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/20 rounded-2xl -z-10 border border-white/30"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Scroll Indicator - Below the card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-6"
        >
          <p className="text-white/50 text-sm font-body">
            ← Swipe or use arrows to explore categories →
          </p>
        </motion.div>
      </motion.div>

      {/* Products Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            layout
            className="w-full"
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-20"
        >
          <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <h3 className="text-xl font-heading font-bold text-white mb-2">No products found</h3>
          <p className="text-white/70">
            Try selecting a different category or check back later for new products.
          </p>
        </motion.div>
      )}

    </div>
  )
}

