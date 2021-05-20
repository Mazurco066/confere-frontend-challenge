// Dependencies
import React, { useEffect, useState } from 'react'
import api from 'api'
import { tryAwait } from 'utils'
import { toast } from 'react-toastify'

// Styles
import * as S from './styles'
import { Container, CustomModal } from 'styles/global'

// Components
import { AddProductModalBody, ModalHeader, ProductList } from 'components'

// Component
export default function Products() {

  // Hooks
  const [ products, setProducts ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const [ selectedProduct, setSelectedProduct ] = useState({})
  const [ isModalOpened, setModalOpenState ] = useState(false)

  // On page load
  useEffect(() => {
    tryAwait({
      promise: api.products.listProducts(),
      onResponse: ({ data: { products }  }) => setProducts(products),
      onError: () => {
        toast.error('Erro ao obter lista de produtos')
      },
      onLoad: _loading => setLoading(_loading)
    })
  }, [])

  // JSX
  return (
    <>
      <S.Wrapper>
        <Container>
          <ProductList
            products={products}
            noData={loading ? 'Aguarde... Carregando' : 'Nenhum produto disponível.'}
            onProductPress={p => {
              setModalOpenState(true)
              setSelectedProduct(p)
            }}
          />
        </Container>
      </S.Wrapper>
      <CustomModal
        isOpen={isModalOpened}
        onEscapeKeydown={() => setModalOpenState(false)}
        onBackgroundClick={() => setModalOpenState(false)}
      >
        <ModalHeader
          title="+ Carrinho"
          onBackPress={() => setModalOpenState(false)}
        />
        <AddProductModalBody
          product={selectedProduct}
          closeCallback={() => setModalOpenState(false)}
        />
      </CustomModal>
    </>
  )
}