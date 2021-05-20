// Dependencies
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import api from 'api'
import { tryAwait } from 'utils'
import { toast } from 'react-toastify'
import moment from 'moment'
import { useShoppingCart } from 'hooks'

// Styles
import * as S from './styles'

// Components
import { Container, Row, Column } from 'styles/global'
import { Button, Input, Select } from 'components'

// Validation schema
const transactionSchema = Yup.object().shape({
  type: Yup.string().required('type is required'),
  value: Yup.number().required('value is required'),
  description: Yup.string().required('description is required'),
  card: Yup.object().shape({
    number: Yup.string().required('Número do cartão é requerido'),
    expiry: Yup.string().required('Data de expiração do cartão é requerido'),
    cvv: Yup.string().required('CVV é requerido'),
    holder: Yup.string().required('Portador do cartão é requerido')
  })
})

// Component
export default function Checkout() {

  // Hooks
  const router = useHistory()
  const { dispatch, state: items } = useShoppingCart()
  const [ loading, setLoading ] = useState(false)
  const formik = useFormik({
    initialValues: {
      type: 'debit',
      installments: '',
      value: items.reduce((ac, { amount, product: { actual_price } }) => 
        ac + (amount * parseFloat(actual_price.replace('R$', '').replace(',', '.'))), 0).toFixed(2),
      description: `Confere Challenge Store Order at ${moment().format('YYYY MM DD')}`,
      card: { number: '', expiry: '', cvv: '', holder: '' }
    },
    validationSchema: transactionSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true)
      tryAwait({
        promise: api.transactions.storeTransaction({
          value: parseFloat(values.value),
          type: values.type,
          description: values.description,
          installments: values.type === 'debit' ? undefined : parseInt(values.installments),
          card: {
            ...values.card,
            number: values.card.number.replace(/\s/g, '')
          }
        }),
        onResponse: ({ data : { status: { code } } }) =>{
          if (code === 201) {
            toast.success('Transação processada com sucesso!')
            dispatch({ type: 'CLEAR', payload: {} })
            router.push('/')
          }
        },
        onError: (err) => {
          const resData = err.response?.data
          let message = 'Erro ao processar transação.'
          if (resData) {
            message = resData.status.message
          }
          toast.error(message)
        },
        onLoad: _loading => setLoading(_loading)
      })
      setSubmitting(false)
    }
  })

  // JSX
  return (
    <>
      <S.Wrapper>
        <Container>
          <Row>
            <Column md={12} sm={12} lg={12}>
              <S.label>Preencha os dados do formulário para finalizar a compra</S.label>
            </Column>
          </Row>
          <S.CheckoutForm onSubmit={formik.handleSubmit}>
            <Row>
              <Column md={4} sm={12} lg={4}>
                <Select
                  label="Tipo de Transação"
                  id="type"
                  name="type"
                  labelLeft
                  value={formik.values.type}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={formik.isSubmitting || loading}
                  options={[
                    { text: 'Débito', value: 'debit' },
                    { text: 'Crédito', value: 'credit' }
                  ]}
                />
              </Column>
              <Column md={8} sm={12} lg={8}>
                <Select
                  label="Parcelas"
                  id="installments"
                  name="installments"
                  labelLeft
                  disabled={formik.values.type === 'debit' || formik.isSubmitting || loading}
                  value={formik.values.installments}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  options={[
                    { text: '1x no Crédito', value: '1' },
                    { text: '2x no Crédito', value: '2' },
                    { text: '3x no Crédito', value: '3' },
                    { text: '6x no Crédito', value: '6' },
                    { text: '9x no Crédito', value: '9' },
                    { text: '12x no Crédito', value: '12' }
                  ]}
                />
              </Column>
              <Column md={12} sm={12} lg={12}>
                <Input
                  id="card.number"
                  name="card.number"
                  label="Número do Cartão"
                  placeholder="Número do Cartão"
                  value={formik.values.card?.number}
                  mask="9999 9999 9999 9999"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={formik.isSubmitting || loading}
                  invalid={formik.touched.card?.number && formik.errors.card?.number ? true : false}
                  message={formik.errors.card?.number}
                />
              </Column>
              <Column md={12} sm={12} lg={12}>
                <Input
                  id="card.holder"
                  name="card.holder"
                  label="Nome do portador descrito no cartão"
                  placeholder="Nome do portador descrito no cartão"
                  value={formik.values.card.holder}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={formik.isSubmitting || loading}
                  invalid={formik.touched.card?.holder && formik.errors.card?.holder ? true : false}
                  message={formik.errors.card?.holder}
                />
              </Column>
              <Column md={4} sm={12} lg={4}>
                <Input
                  id="card.cvv"
                  name="card.cvv"
                  label="CVV do Cartão"
                  placeholder="CVV do Cartão"
                  value={formik.values.card.cvv}
                  mask="999"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={formik.isSubmitting || loading}
                  invalid={formik.touched.card?.cvv && formik.errors.card?.cvv ? true : false}
                  message={formik.errors.card?.cvv}
                />
              </Column>
              <Column md={4} sm={12} lg={4}>
                <Input
                  id="card.expiry"
                  name="card.expiry"
                  label="Data de expiração do Cartão"
                  placeholder="Data de expiração do Cartão"
                  value={formik.values.card.expiry}
                  mask="99/99"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={formik.isSubmitting || loading}
                  invalid={formik.touched.card?.expiry && formik.errors.card?.expiry ? true : false}
                  message={formik.errors.card?.expiry}
                />
              </Column>
              <Column md={4} sm={12} lg={4}>
                <Input
                  id="value"
                  name="value"
                  disabled
                  label="Valor da Transação (R$)"
                  placeholder="Valor da Transação"
                  value={formik.values.value}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  invalid={formik.touched.value && formik.errors.value ? true : false}
                  message={formik.errors.value}
                />
              </Column>
              <Column md={12} sm={12} lg={12}>
                <Button
                  disabled={formik.isSubmitting || loading}
                  type="submit"
                  text="Enviar Pedido"
                />
              </Column>
            </Row>
          </S.CheckoutForm>
        </Container>
      </S.Wrapper>
    </>
  )
}