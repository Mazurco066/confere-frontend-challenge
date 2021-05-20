// Dependencies
import { useContext } from 'react'
import { SearchContext } from 'providers'

// Hook
export default function useSearch() {
  return useContext(SearchContext)
}