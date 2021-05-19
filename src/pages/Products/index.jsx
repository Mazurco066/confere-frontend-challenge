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

  console.log(products, loading)

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

        </Container>
      </S.Wrapper>
    </>
  )
}