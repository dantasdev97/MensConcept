import { useState } from 'react'
import { motion } from 'framer-motion'
import ProductCard from './ProductCard'
import { products, getUniqueCategories, getProductsByCategory } from '../data/products'

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos')
  const categories = ['Todos', ...getUniqueCategories()]

  const filteredProducts = selectedCategory === 'Todos'
    ? products
    : getProductsByCategory(selectedCategory)

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
          Nossos Produtos
        </h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Produtos premium selecionados especialmente para você. Qualidade profissional e cuidados masculinos.
        </p>
      </motion.div>

      {/* Filtros por Categoria */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-full font-heading font-bold transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-[#DD9E32] text-white shadow-lg shadow-[#DD9E32]/30'
                : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
            }`}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Grid de Produtos */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            layout
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>

      {/* Mensagem quando não há produtos */}
      {filteredProducts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-white/70 text-lg">
            Nenhum produto encontrado nesta categoria.
          </p>
        </motion.div>
      )}

      {/* Estatísticas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16 text-center"
      >
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl font-heading font-bold text-[#DD9E32] mb-1">
                {products.length}
              </div>
              <div className="text-white/70 text-sm font-body">
                Produtos
              </div>
            </div>
            <div>
              <div className="text-2xl font-heading font-bold text-[#DD9E32] mb-1">
                {getUniqueCategories().length}
              </div>
              <div className="text-white/70 text-sm font-body">
                Categorias
              </div>
            </div>
            <div>
              <div className="text-2xl font-heading font-bold text-[#DD9E32] mb-1">
                {products.filter(p => p.oldPrice).length}
              </div>
              <div className="text-white/70 text-sm font-body">
                Em Promoção
              </div>
            </div>
            <div>
              <div className="text-2xl font-heading font-bold text-[#DD9E32] mb-1">
                {products.filter(p => p.tags.includes('Mais Vendido')).length}
              </div>
              <div className="text-white/70 text-sm font-body">
                Mais Vendidos
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

