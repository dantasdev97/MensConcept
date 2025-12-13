import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Product } from '../types/product'
import { getProductById, getFeaturedProducts } from '../data/products'
import { useCartContext } from '../contexts/CartContext'
import MenuModal from './MenuModal'

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { addToCart } = useCartContext()
  const [product, setProduct] = useState<Product | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isAdded, setIsAdded] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (id) {
      const productData = getProductById(parseInt(id))
      if (productData) {
        setProduct(productData)
      } else {
        navigate('/products-demo') // Redirect if product not found
      }
    }
  }, [id, navigate])

  if (!product) {
    return (
      <div className="min-h-screen bg-[#0C0A09] flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  const allImages = [product.image, ...product.gallery].filter(Boolean)
  const featuredProducts = getFeaturedProducts().filter(p => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addToCart(product, 1)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))
  }

  return (
    <div className="min-h-screen bg-[#0C0A09]">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-40 bg-[#0C0A09]/95 backdrop-blur-sm border-b border-white/10"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-white hover:text-[#DD9E32] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>

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
      </motion.header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Gallery Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            {/* Main Image/Video */}
            <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
              {showVideo && product.video ? (
                <video
                  src={product.video}
                  controls
                  className="w-full h-full object-cover"
                  poster={product.image}
                />
              ) : (
                <img
                  src={allImages[currentImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = 'https://via.placeholder.com/600x600/0C0A09/DD9E32?text=' + encodeURIComponent(product.name)
                  }}
                />
              )}

              {/* Video Toggle Button */}
              {product.video && (
                <button
                  onClick={() => setShowVideo(!showVideo)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
                >
                  {showVideo ? (
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM9.5 11l3 1.5L15.5 11 12.5 9.5z"/>
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </button>
              )}

              {/* Promotion Badge */}
              {product.oldPrice && (
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-full">
                    {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% OFF
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {allImages.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {allImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentImageIndex(index)
                      setShowVideo(false)
                    }}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                      index === currentImageIndex && !showVideo
                        ? 'border-[#DD9E32]'
                        : 'border-transparent hover:border-white/50'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = 'https://via.placeholder.com/64x64/0C0A09/DD9E32?text=' + encodeURIComponent(product.name)
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Category & Tags */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm text-[#DD9E32] font-body uppercase tracking-wider">
                {product.category}
              </span>
              {product.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-[#DD9E32]/20 text-[#DD9E32] text-xs font-bold rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Name */}
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-white">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {renderStars(product.rating)}
              </div>
              <span className="text-white/70 text-sm">
                ({product.rating.toFixed(1)})
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-3xl font-heading font-bold text-white">
                €{product.price.toFixed(2)}
              </span>
              {product.oldPrice && (
                <span className="text-xl text-white/50 line-through">
                  €{product.oldPrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-white/80 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Add to Cart Button */}
            <motion.button
              onClick={handleAddToCart}
              disabled={isAdded}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-4 px-6 font-heading font-semibold rounded-lg transition-all duration-200 text-lg ${
                isAdded
                  ? 'bg-green-500 text-white cursor-not-allowed'
                  : 'bg-[#DD9E32] text-white hover:bg-[#C88A1F] hover:shadow-lg'
              }`}
            >
              {isAdded ? '✓ Added to Cart' : 'Add to Cart'}
            </motion.button>

            {/* Benefits */}
            {product.benefits.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xl font-heading font-semibold text-white">
                  Benefits
                </h3>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/80">
                      <svg className="w-5 h-5 text-[#DD9E32] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* How to Use */}
            {product.howToUse && (
              <div className="space-y-3">
                <h3 className="text-xl font-heading font-semibold text-white">
                  How to Use
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {product.howToUse}
                </p>
              </div>
            )}
          </motion.div>
        </div>

        {/* Recommended Products */}
        {featuredProducts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-white/10 pt-12"
          >
            <h2 className="text-2xl font-heading font-bold text-white mb-6 text-center">
              You Might Also Like
            </h2>
            <div
              className="flex gap-4 overflow-x-auto pb-4"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              {featuredProducts.map((recommendedProduct) => (
                <motion.div
                  key={recommendedProduct.id}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="flex-shrink-0 w-48 bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300 border border-white/10"
                >
                  <Link to={`/products/${recommendedProduct.id}`}>
                    <div className="aspect-square bg-gray-100 overflow-hidden">
                      <motion.img
                        src={recommendedProduct.image}
                        alt={recommendedProduct.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = 'https://via.placeholder.com/200x200/0C0A09/DD9E32?text=' + encodeURIComponent(recommendedProduct.name)
                        }}
                      />
                    </div>
                    <div className="p-3">
                      <span className="text-xs text-[#DD9E32] font-body uppercase tracking-wider">
                        {recommendedProduct.category}
                      </span>
                      <h3 className="text-sm font-heading font-bold text-white mt-1 mb-2 line-clamp-2">
                        {recommendedProduct.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-heading font-bold text-white">
                          €{recommendedProduct.price.toFixed(2)}
                        </span>
                        {recommendedProduct.oldPrice && (
                          <span className="text-xs text-white/50 line-through">
                            €{recommendedProduct.oldPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </div>

      {/* Menu Modal */}
      <MenuModal
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </div>
  )
}
