import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Product } from '../types/product'
import { useCartContext } from '../contexts/CartContext'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCartContext()
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    addToCart(product, 1)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-white/20"
    >
      {/* Product Image */}
      <div className="relative h-48 bg-gray-100 overflow-hidden">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = 'https://via.placeholder.com/400x300/0C0A09/DD9E32?text=' + encodeURIComponent(product.name)
          }}
        />

        {/* Tags */}
        {product.tags.length > 0 && (
          <div className="absolute top-2 left-2 flex flex-wrap gap-1">
            {product.tags.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-[#DD9E32] text-white text-xs font-bold rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Promotion Badge */}
        {product.oldPrice && (
          <div className="absolute top-2 right-2">
            <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
              {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% OFF
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category */}
        <span className="text-xs text-[#DD9E32] font-body uppercase tracking-wider">
          {product.category}
        </span>

        {/* Name */}
        <h3 className="text-lg font-heading font-bold text-gray-900 mt-1 mb-2">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm font-body mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Prices */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-heading font-bold text-gray-900">
              €{product.price.toFixed(2)}
            </span>
            {product.oldPrice && (
              <span className="text-sm text-gray-500 line-through">
                €{product.oldPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <motion.button
            onClick={handleAddToCart}
            disabled={isAdded}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`flex-1 px-3 py-2 font-heading font-semibold rounded-lg transition-colors text-sm ${
              isAdded
                ? 'bg-green-500 text-white cursor-not-allowed'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {isAdded ? '✓ Added' : 'Add to Cart'}
          </motion.button>

          <Link to={`/products/${product.id}`} className="flex-1">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-3 py-2 bg-[#DD9E32] text-white font-heading font-semibold rounded-lg hover:bg-[#C88A1F] transition-colors text-sm"
            >
              View Product
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

