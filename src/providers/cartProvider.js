// Dependencies
import PropTypes from 'prop-types'
import { createContext, useEffect, useReducer } from 'react'

// Utils
const CART_KEY = '@next:shoppingCart'

// Shopping cart initial state
const initialState = []

// Reducer
function reducer(state, action) {
  
  // Retrieve action and payload
  const { product, amount, sku } = action.payload

  // Search if cart has the received product
  const entry = state?.find((item) => item.sku === sku)

  // Verify action
  switch (action.type) {
    case 'ADD_ITEM':
      // If item is already in shopping cart
      if (entry) {
        const newItems = state.map((item) => {
          const newAmount = item.amount + amount
          if (item.sku === sku) {
            return {
              sku: sku,
              product,
              amount: newAmount
            }
          }
          return item
        })
        if (window !== undefined) {
          window.localStorage.setItem(CART_KEY, JSON.stringify(newItems))
        }
        return newItems
      }
      // If item is not in shopping cart
      const newItems = [...state, {
        sku: sku,
        product,
        amount: amount
      }]
      if (window !== undefined) {
        window.localStorage.setItem(CART_KEY, JSON.stringify(newItems))
      }
      return newItems
    case 'UPDATE_AMOUNT':
      const updatedItems = state?.map(s => {
        if (s.sku === sku) {
          return { ...s, amount: amount }
        }
        return { ...s }
      })
      if (window !== undefined) {
        window.localStorage.setItem(CART_KEY, JSON.stringify(updatedItems))
      }
      return updatedItems
    case 'REMOVE_ITEM':
      const remainingItems = [ ...state.filter(s => s.sku !== sku) ]
      if (window !== undefined) {
        window.localStorage.setItem(CART_KEY, JSON.stringify(remainingItems))
      }
      return remainingItems
    case 'LOAD_STORED':
      const storedItems = window.localStorage.getItem(CART_KEY)
        ? JSON.parse(window.localStorage.getItem(CART_KEY))
        : []
      return storedItems
    case 'CLEAR':
      if (window !== undefined) {
        window.localStorage.removeItem(CART_KEY)
      }
      return []
    default:
      return state
  }
}

// Conext
export const CartContext = createContext()

// Provider
export default function CartProvider({ children }) {

  // Reducers
  const [state, dispatch] = useReducer(reducer, initialState)

  // Effects
  useEffect(() => {
    dispatch({
      type: 'LOAD_STORED',
      payload: {}
    })
  }, [])

  // Provides
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

// Prop Types
CartProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}