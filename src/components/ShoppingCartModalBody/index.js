// Dependencies
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { useShoppingCart } from 'hooks'
import { toast } from 'react-toastify'
import { toBRL } from 'utils'

// Styles
import * as S from './styles'

//Components
import { FaTrash } from 'react-icons/fa'
import { Button } from 'components'

// Component
export default function ShoppingCartModalBody({ closeCallback }) {

  // Hooks
  const router = useHistory()
  const { dispatch, state: items } = useShoppingCart()

  // Jsx
  return (
    <S.Wrapper>
      <S.Items>
        { items?.map(({
          product: { name, image, actual_price },
          sku,
          amount
        }, i) => (
          <S.Item key={i}>
            <S.Image>
              <img src={image} alt={name} />
            </S.Image>
            <S.Info>
              <S.Description>{name}</S.Description>
              <S.Description>
                Sku: <strong>{sku}</strong>
              </S.Description>
              <S.Price>
                {amount} x {actual_price}
              </S.Price>
            </S.Info>
            <S.Actions>
            <S.Action onClick={() => {
                dispatch({
                  type: 'REMOVE_ITEM',
                  payload: { sku }
                })
                toast.info('Produto removido do carrinho!')
              }}>
                <FaTrash />
              </S.Action>
            </S.Actions>
          </S.Item>
        )) }
        { items?.length === 0 && (
          <S.NoData>
            Seu carrinho está vazio.
          </S.NoData>
        ) }
      </S.Items>
      { items?.length > 0 && (
        <S.Subtotal>
          <strong>Subtotal:</strong>{' '}
          R$ {
            toBRL(
              items.reduce((ac, { amount, product: { actual_price } }) => 
                ac + (amount * parseFloat(actual_price.replace('R$', ''))), 0)
            )
          }
        </S.Subtotal>
      ) }
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