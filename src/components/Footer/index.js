// Dependencies
import React from 'react'

// Styles
import * as S from './styles'

// Components
import { Container } from 'styles/global'

// Components
export default function Footer() {
  
  // JSX
  return (
    <S.Footer>
      <Container>
        <S.Copyright>
          Confere Frontend Challenge © 2021
        </S.Copyright>
      </Container>
    </S.Footer>
  )
}