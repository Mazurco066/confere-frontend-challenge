// Dependencies
import PropTypes from 'prop-types'
import { createContext, useReducer } from 'react'

// Shopping cart initial state
const initialState = ''

// Reducer
function reducer(state, action) {
  
  // Retrieve action and payload
  const { search } = action.payload

  // Verify action
  switch (action.type) {
    case 'UPDATE_VALUE':
      return search     
    default:
      return state
  }
}

// Conext
export const SearchContext = createContext()

// Provider
export default function SearchProvider({ children }) {

  // Reducers
  const [state, dispatch] = useReducer(reducer, initialState)

  // Provides
  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  )
}

// Prop Types
SearchProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}