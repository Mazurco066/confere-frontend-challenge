// Dependencies
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'
import { useShoppingCart } from 'hooks'
import { toBRL } from 'utils'

// Styles
import * as S from './styles'

// Components
import { FaTrash } from 'react-icons/fa'
import { Button, ProductAmount } from 'components'

// Component
export default function CartTable({ items, onCheckoutClick }) {

  // Hooks
  const { dispatch } = useShoppingCart()

  // JSX
  return (
    <S.Wrapper>
      <S.Title>Carrinho de Compras conténdo um subtoal de<strong> R$ {
        toBRL(
          items.reduce((ac, { amount, product: { actual_price } }) => 
            ac + (amount * parseFloat(actual_price.replace('R$', '').replace(',', '.'))), 0)
          )
        }</strong>
      </S.Title>
      { items.length > 0 && (
        <Button
          type="button"
          text="Prosseguir para o checkout"
          onClick={onCheckoutClick}
          mb={1}
        />
      ) }
      {items?.map(({
        product: { name, image, actual_price },
        amount,
        sku
      }, i) => (
        <S.Item key={i}>
          <S.ProductImage>
            <img
              src={image}
              alt={name}
            />
          </S.ProductImage>
          <S.Info>
            <S.Description>
              {name}
            </S.Description>
            <S.Description>
              Sku: <strong>{sku}</strong>
            </S.Description>
          </S.Info>
          <S.Pricing>
            <S.Price>
              R$ {toBRL(amount * parseFloat(actual_price.replace('R$', '')))}
            </S.Price>
          </S.Pricing>
          <S.Amount>
            <ProductAmount
              name="amount"
              min="1"
              max="999"
              readonly
              disabled
              onChange={(e) => {
                dispatch({
                  type: 'UPDATE_AMOUNT',
                  payload: {
                    sku: sku,
                    amount: parseInt(e.target.value)
                  }
                })
              }}
              defaultValue={amount}
              mb='0'
            />
          </S.Amount>
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
      ))}
      { items?.length <= 0 && (
        <p style={{ marginBottom: 16 }}>Não há itens em seu carrinho de compras!</p>
      ) }
    </S.Wrapper>
  )
}

// PropTypes
CartTable.defaultProps = {
  items: [],
  onCheckoutClick: () => {}
}

CartTable.propTypes = {
  items: PropTypes.array,
  onCheckoutClick: PropTypes.func
}