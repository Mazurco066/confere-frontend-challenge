// Dependencies
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { useSearch } from 'hooks'

// Styles
import * as S from './styles'

// Components
import { CustomModal } from 'styles/global'
import { Header, Footer, ModalHeader, ShoppingCartModalBody } from 'components'

// Layout
export default function DefaultLayout({ children }) {

  // Hooks
  const history = useHistory()
  const { dispatch } = useSearch()
  const [ isCartOpened, setCartOpened ] = useState(false)

  // JSX
  return (
    <>
      <S.Wrapper>
        <Header
          appName="Confere Frontend Store"
          onCartPress={() => setCartOpened(true)}
          searchBarVisible={history.location.pathname === '/'}
          onSearch={(text) => dispatch({
            type: 'UPDATE_VALUE',
            payload: {
              search: text
            }
          })}
        />
        <S.Content>
          {children}
        </S.Content>
        <Footer />
      </S.Wrapper>
      <CustomModal
        isOpen={isCartOpened}
        onEscapeKeydown={() => setCartOpened(false)}
        onBackgroundClick={() => setCartOpened(false)}
      >
        <ModalHeader
          title="Meu Carrinho"
          onBackPress={() => setCartOpened(false)}
        />
        <ShoppingCartModalBody
          closeCallback={() => setCartOpened(false)}
        />
      </CustomModal>
    </>
  )
}

// Prop Types
DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired
}