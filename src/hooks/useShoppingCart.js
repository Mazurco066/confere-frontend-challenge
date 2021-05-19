// Dependencies
import { useContext } from 'react'
import { CartContext } from 'providers'

// Hook
export default function useShoppingCart() {
  return useContext(CartContext)
}