import { useState, useEffect, useCallback } from 'react'
import { Product } from '../types/product'

export interface CartItem {
  product: Product
  quantity: number
}

export interface CartState {
  items: CartItem[]
  totalItems: number
  totalPrice: number
}

export const useCart = () => {
  const [cart, setCart] = useState<CartState>({
    items: [],
    totalItems: 0,
    totalPrice: 0
  })

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('mensconcept-cart')
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart)
        const totalItems = parsedCart.items.reduce((sum: number, item: CartItem) => sum + item.quantity, 0)
        const totalPrice = parsedCart.items.reduce((sum: number, item: CartItem) =>
          sum + (item.product.price * item.quantity), 0
        )
        setCart({
          items: parsedCart.items,
          totalItems,
          totalPrice
        })
      } catch (error) {
        console.error('Error loading cart:', error)
      }
    }
  }, [])

  // Save cart to localStorage
  const saveCart = useCallback((newCart: CartState) => {
    localStorage.setItem('mensconcept-cart', JSON.stringify({ items: newCart.items }))
    setCart(newCart)
  }, [])

  // Add product to cart
  const addToCart = useCallback((product: Product, quantity: number = 1) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.items.findIndex(
        item => item.product.id === product.id
      )

      let newItems: CartItem[]

      if (existingItemIndex >= 0) {
        // Product already exists, increase quantity
        newItems = prevCart.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      } else {
        // New product
        newItems = [...prevCart.items, { product, quantity }]
      }

      const newTotalItems = newItems.reduce((sum, item) => sum + item.quantity, 0)
      const newTotalPrice = newItems.reduce((sum, item) =>
        sum + (item.product.price * item.quantity), 0
      )

      const newCart = {
        items: newItems,
        totalItems: newTotalItems,
        totalPrice: newTotalPrice
      }

      saveCart(newCart)
      return newCart
    })
  }, [saveCart])

  // Remove product from cart
  const removeFromCart = useCallback((productId: number) => {
    setCart(prevCart => {
      const newItems = prevCart.items.filter(item => item.product.id !== productId)
      const newTotalItems = newItems.reduce((sum, item) => sum + item.quantity, 0)
      const newTotalPrice = newItems.reduce((sum, item) =>
        sum + (item.product.price * item.quantity), 0
      )

      const newCart = {
        items: newItems,
        totalItems: newTotalItems,
        totalPrice: newTotalPrice
      }

      saveCart(newCart)
      return newCart
    })
  }, [saveCart])

  // Update product quantity
  const updateQuantity = useCallback((productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }

    setCart(prevCart => {
      const newItems = prevCart.items.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )

      const newTotalItems = newItems.reduce((sum, item) => sum + item.quantity, 0)
      const newTotalPrice = newItems.reduce((sum, item) =>
        sum + (item.product.price * item.quantity), 0
      )

      const newCart = {
        items: newItems,
        totalItems: newTotalItems,
        totalPrice: newTotalPrice
      }

      saveCart(newCart)
      return newCart
    })
  }, [saveCart, removeFromCart])

  // Clear cart
  const clearCart = useCallback(() => {
    const emptyCart = {
      items: [],
      totalItems: 0,
      totalPrice: 0
    }
    saveCart(emptyCart)
  }, [saveCart])

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  }
}
