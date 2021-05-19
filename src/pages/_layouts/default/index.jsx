// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Styles
import * as S from './styles'

// Layout
export default function DefaultLayout({ children }) {
  return (
    <S.Wrapper>
      <S.Content>
        {children}
      </S.Content>
    </S.Wrapper>
  )
}

// Prop Types
DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired
}