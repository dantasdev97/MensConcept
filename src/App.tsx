import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ProductsDemo from './pages/ProductsDemo'
import { CartProvider } from './contexts/CartContext'

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-[#0C0A09]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<About />} />
          <Route path="/products-demo" element={<ProductsDemo />} />
        </Routes>
      </div>
    </CartProvider>
  )
}

export default App

