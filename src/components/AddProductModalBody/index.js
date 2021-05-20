// Dependencies
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'
import { useFormik } from 'formik'
import { useShoppingCart } from 'hooks'

// Styles
import * as S from './styles'

// Components
import { Button, ProductAmount, Select } from 'components'
import { Row, Column } from 'styles/global'

// Component
export default function ProductModalBody({ product = {}, closeCallback }) {

  // Destruct product
  const { name, image, on_sale, discount_percentage, regular_price, actual_price, sizes } = product

  // Hooks
  const { dispatch } = useShoppingCart()
  const formik = useFormik({
    initialValues: {
      amount: 1,
      sku: sizes.filter(({ available }) => available)[0].sku
    },
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true)
      const { amount, sku } = values
      dispatch({
        type: 'ADD_ITEM',
        payload: { product, amount, sku }
      })
      toast.success('Produto adicionado ao carrinho!')
      closeCallback()
      setSubmitting(false)
    }
  })

  // Jsx
  return (
    <>
      {product && (
        <S.Wrapper onSubmit={formik.handleSubmit}>
          <S.Image>
            <img src={image} alt={name} />
            <S.Sizes>
              { sizes.map(({ available, size }, i) => (
                <S.Size out={!available} key={i}>{size}</S.Size>
              )) }
            </S.Sizes>
            {on_sale && (
              <S.OnSale>
                {discount_percentage} off
              </S.OnSale>
            )}
          </S.Image>
          <S.Name>{name}</S.Name>
          { regular_price === actual_price ? (
            <S.Price style={{ marginBottom: 16 }}>
              {actual_price}
            </S.Price>
          ): (
            <>
              <S.Price>
                De <span>{regular_price}</span>
              </S.Price>
              <S.Price style={{ marginBottom: 16 }}>
                Por {actual_price}
              </S.Price>
            </>
          ) }
          <Row style={{ marginBottom: 16 }}>
            <Column sm={12} md={12} lg={8}>
              <Select
                label="Tamanho"
                name="sku"
                value={formik.values.sku}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                options={sizes.filter(({ available }) => available).map(({ size, sku }) => ({
                  text: size,
                  value: sku
                }))}
              />
            </Column>
            <Column sm={12} md={12} lg={4}>
              <ProductAmount
                name="amount"
                label="Quantidade"
                min="1"
                max="999"
                value={formik.values.amount}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Column>
          </Row>
          <Row>
            <Column lg={12} sm={12} md={12}>
              <S.Actions>
                <Button
                  disabled={formik.isSubmitting}
                  type="submit"
                  text="Adicionar ao Carrinho"
                  mb={0}
                />
              </S.Actions>
            </Column>
          </Row>
        </S.Wrapper>
      )}
    </>
  )
}

// Prop Types
ProductModalBody.defaultProps = {
  product: {},
  closeCallback: () => {}
}

ProductModalBody.propTypes = {
  product: PropTypes.object,
  closeCallback: PropTypes.func
}
