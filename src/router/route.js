// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

// Layout
import { DefaultLayout } from 'pages/_layouts'

// Wrapper
export default function RouteWrapper({ component: Component, ...rest }) {

  // Layout component
  const Layout = DefaultLayout
  
  // Jsx
  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  )
}

// Prop Types
RouteWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
}