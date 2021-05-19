// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Styles
import * as S from './styles'

// Components
import { Header, Footer } from 'components'

// Layout
export default function DefaultLayout({ children }) {
  return (
    <S.Wrapper>
      <Header
        appName="Confere Frontend Store"
      />
      <S.Content>
        {children}
      </S.Content>
      <Footer />
    </S.Wrapper>
  )
}

// Prop Types
DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired
}