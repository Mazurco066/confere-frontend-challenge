// Dependencies
import PropTypes from 'prop-types'

// Styles
import * as S from './styles'

// Components
import { FaCartPlus } from 'react-icons/fa'

// Component
export default function ProductList({ products, onProductPress, filter, noData }) {
    
  // Jsx
  return (
    <>
      { (products && products.length > 0) ? (
        <S.Wrapper>
          <S.Grid >
            {                   
              products
                .filter(({ name }) => name.includes(filter))
                .map(({ 
                  name,
                  image,
                  on_sale,
                  discount_percentage,
                  regular_price,
                  actual_price,
                  sizes,
                  ...rest
                }, i) => (
                <S.Item
                  onClick={() => onProductPress({
                    name,
                    image,
                    on_sale,
                    discount_percentage,
                    regular_price,
                    actual_price,
                    sizes,
                    ...rest 
                  })}
                  key={i}
                >
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
                  <S.Info>
                    <S.Name>{name.toLowerCase()}</S.Name>
                    { regular_price === actual_price ? (
                      <S.Price>{actual_price}</S.Price>
                    ): (
                      <>
                        <S.Price>
                          De <span>{regular_price}</span>
                        </S.Price>
                        <S.Price>
                          Por {actual_price}
                        </S.Price>
                      </>
                    ) }
                  </S.Info>
                  <S.NavIcon>
                    <FaCartPlus />
                  </S.NavIcon>
                </S.Item>
              ))
            }
          </S.Grid>
        </S.Wrapper>
      ) : (
        <S.Wrapper>
          <p>{noData}</p>
        </S.Wrapper>
      ) }
    </>
  )
}

// Prop Types
ProductList.defaultProps = {
  products: [],
  filter: '',
  title: 'Produtos',
  noData: 'Nenhum resultado encontrado nessa página. Experimente buscar no site inteiro clicando em buscar ou pressionando Enter.',
  onProductPress: () => {},
}

ProductList.propTypes = {
  products: PropTypes.array,
  filter: PropTypes.string,
  noData: PropTypes.string,
  title: PropTypes.string,
  onProductPress: PropTypes.func,
}
