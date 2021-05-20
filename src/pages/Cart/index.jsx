// Dependencies
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useShoppingCart } from 'hooks'

// Styles
import * as S from './styles'
import { Container } from 'styles/global'

// Components
import { Button, CartTable } from 'components'

// Component
export default function Cart() {

  // Hooks
  const router = useHistory()
  const { state: items } = useShoppingCart()

  // JSX
  return (
    <>
      <S.Wrapper>
        <Container>
          <CartTable
            items={items}
            onCheckoutClick={() => router.push('/checkout')}
          />
          { items.length > 0 && (
            <Button
              type="button"
              text="Prosseguir para o checkout"
              onClick={() => router.push('/checkout')}
            />
          ) }
        </Container>
      </S.Wrapper>
    </>
  )
}