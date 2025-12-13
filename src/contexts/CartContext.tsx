import { createContext, useContext } from 'react'
import { useCart, CartState } from '../hooks/useCart'

interface CartContextType extends CartState {
  addToCart: (product: import('../types/product').Product, quantity?: number) => void
  removeFromCart: (productId: number) => void
  updateQuantity: (productId: number, quantity: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCartContext = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCartContext deve ser usado dentro de um CartProvider')
  }
  return context
}

interface CartProviderProps {
  children: React.ReactNode
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const cartHook = useCart()

  const value: CartContextType = {
    ...cartHook.cart,
    addToCart: cartHook.addToCart,
    removeFromCart: cartHook.removeFromCart,
    updateQuantity: cartHook.updateQuantity,
    clearCart: cartHook.clearCart
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}
