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
      className="group relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-white/30 hover:border-[#DD9E32]/30"
    >
      {/* Product Image - Destaque Principal */}
      <div className="relative h-64 bg-gray-100 overflow-hidden">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = 'https://via.placeholder.com/400x300/0C0A09/DD9E32?text=' + encodeURIComponent(product.name)
          }}
        />

        {/* Overlay gradiente para legibilidade do texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        {/* Tags - Reposicionadas */}
        {product.tags.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            {product.tags.slice(0, 2).map((tag, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="px-3 py-1 bg-[#DD9E32] text-white text-xs font-bold rounded-full shadow-lg"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        )}

        {/* Promotion Badge - Reposicionada */}
        {product.oldPrice && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-3 right-3"
          >
            <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full shadow-lg">
              {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% OFF
            </span>
          </motion.div>
        )}

        {/* Título e Preço - Dentro da Imagem */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Category */}
            <span className="text-xs text-[#DD9E32] font-body uppercase tracking-wider mb-1 block">
              {product.category}
            </span>

            {/* Product Name */}
            <h3 className="text-lg font-heading font-bold text-white mb-2 line-clamp-2 group-hover:text-[#DD9E32] transition-colors duration-300">
              {product.name}
            </h3>

            {/* Price */}
            <div className="flex items-center gap-2">
              <span className="text-xl font-heading font-bold text-white">
                €{product.price.toFixed(2)}
              </span>
              {product.oldPrice && (
                <span className="text-sm text-gray-300 line-through">
                  €{product.oldPrice.toFixed(2)}
                </span>
              )}
            </div>
          </motion.div>
        </div>

        {/* Botões de Ação - Overlay na Imagem */}
        <div className="absolute bottom-4 right-4 flex gap-3">
          {/* View Details Button - Left */}
          <Link to={`/products/${product.id}`}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-white/20 hover:bg-white/30 text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
              aria-label="View product details"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </motion.button>
          </Link>

          {/* Add to Cart Button - Right (Destacado) */}
          <motion.button
            onClick={handleAddToCart}
            disabled={isAdded}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.85 }}
            className={`w-14 h-14 rounded-full shadow-xl transition-all duration-300 flex items-center justify-center ${
              isAdded
                ? 'bg-green-500 text-white cursor-not-allowed scale-110'
                : 'bg-[#DD9E32] hover:bg-[#C88A1F] text-white shadow-[#DD9E32]/50 hover:shadow-[#DD9E32]/70'
            }`}
            aria-label="Add to cart"
          >
            {isAdded ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2 4m2-4l2 4m7-4v8a2 2 0 01-2 2H9a2 2 0 01-2-2v-8" />
              </svg>
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

