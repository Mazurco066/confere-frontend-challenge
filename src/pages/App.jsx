// Dependencies
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ModalProvider } from 'styled-react-modal'
import { ToastContainer } from 'react-toastify'
import { SearchProvider, CartProvider } from 'providers'

// Styles
import GlobalStyles from 'styles/global'
import 'react-toastify/dist/ReactToastify.css'

// Router
import Routes from 'router'

// Root Component
export default function App() {

  // JSX
  return (
    <Router>
      <ModalProvider>
        <CartProvider>
          <SearchProvider>
            <Routes />
            <GlobalStyles />
            <ToastContainer
              position="top-right"
            />
          </SearchProvider>
        </CartProvider>
      </ModalProvider>
    </Router>
  )
}