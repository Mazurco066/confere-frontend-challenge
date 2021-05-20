// Dependencies
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { useShoppingCart } from 'hooks'

// Styles
import * as S from './styles'

//Components
import { Button } from 'components'

// Component
export default function ShoppingCartModalBody({ closeCallback }) {

  // Hooks
  const router = useHistory()
  const { state: items } = useShoppingCart()

  // Jsx
  return (
    <S.Wrapper>
      <S.Items>
        { items?.map(({
          product: { name },
          amount,
          sku
        }, i) => (
          <S.Item key={i}>
            <p>{name}</p>
            <p>{amount}</p>
            <p>{sku}</p>
          </S.Item>
        )) }
        { items?.length === 0 && (
          <S.NoData>
            Seu carrinho está vazio.
          </S.NoData>
        ) }
      </S.Items>
      <Button
        status="highlight"
        type="button"
        text="Ver carrinho"
        mb={1}
        onClick={() => {
          router.push('/cart')
          closeCallback()
        }}
      />
      <Button
        type="button"
        onClick={() => closeCallback()}
        text="Continuar comprando"
      />
    </S.Wrapper>
  )
}

// Prop Types
ShoppingCartModalBody.defaultProps = {
  closeCallback: () => {}
}

ShoppingCartModalBody.propTypes = {
  closeCallback: PropTypes.func
}