// Dependencies
import React, { useEffect, useState } from 'react'
import api from 'api'
import { tryAwait } from 'utils'
import { toast } from 'react-toastify'

// Styles
import * as S from './styles'
import { Container } from 'styles/global'

// Component
export default function Products() {

  // Hooks
  const [ products, setProducts ] = useState([])
  const [ loading, setLoading ] = useState(false)

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
          <p>Produtos {loading}</p>
          <pre>
            {JSON.stringify(products, null, 2)}
          </pre>
        </Container>
      </S.Wrapper>
    </>
  )
}