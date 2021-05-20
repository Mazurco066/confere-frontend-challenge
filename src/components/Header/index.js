// Dependencies
import PropTypes from 'prop-types'
import * as S from './styles'
import { useShoppingCart } from 'hooks'
import { useHistory } from 'react-router-dom'

// Components
import { Input } from 'components'
import { FaShoppingCart, FaSearch, FaChevronRight } from 'react-icons/fa'

// Component
export default function Header({
  appName,
  onCartPress,
  onSearch,
  searchBarVisible
}) {

  // Hooks
  const history = useHistory()
  const { state: items } = useShoppingCart()

  // Jsx
  return (
    <S.Header>
      <S.Wrapper>
        <S.TopNavigation>
          <S.AppName onClick={() => history.push('/')}>
            {appName}
          </S.AppName>
          <S.TouchableIcon onClick={() => onCartPress(items)}>
            <FaShoppingCart />
            { items?.length > 0 && (
              <S.ItemsInCart>
                {items.length}
              </S.ItemsInCart>
            ) }
          </S.TouchableIcon>
        </S.TopNavigation>
        <S.SearchBox visible={searchBarVisible}>
          <Input
            mb="0"
            type="text"
            name="search"
            placeholder="Buscar"
            addonLeft={() => <FaSearch />}
            addonRight={() => <FaChevronRight />}
            onAddonRightClick={onSearch}
            onKeyDown={e => {
              if (e.keyCode == 13) {
                onSearch(e.target.value)
              }
            }}
            onChange={e => onSearch(e.target.value)}
          />
        </S.SearchBox>
      </S.Wrapper>
    </S.Header>
  )
}

// Prop Types
Header.defaultProps = {
  appName: 'Sample Name',
  searchBarVisible: true,
  onCartPress: () => {},
  onSearch: () => {}
}

Header.propTypes = {
  appName: PropTypes.string,
  onCartPress: PropTypes.func,
  onSearch: PropTypes.func,
  searchBarVisible: PropTypes.bool
}