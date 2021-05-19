// Dependencies
import React from 'react'
import { Switch } from 'react-router-dom'

// Custom Wrapper
import RouteWrapper from './route'

// Pages
import { Products } from 'pages'

// Routes
export default function Router() {
  return (
    <Switch>
      <RouteWrapper exact path="/" component={Products} />
    </Switch>
  )
}