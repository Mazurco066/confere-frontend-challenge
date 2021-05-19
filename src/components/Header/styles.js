// Dependencies
import styled from 'styled-components'

// Styles
export const Header = styled.header`
  grid-area: header;
  background-color: var(--darker);
`

export const Wrapper = styled.div`
  padding: 24px 15px;
  width: 100%;
  max-width: 100%;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 576px) { max-width: 540px; }
  @media (min-width: 768px) { max-width: 720px; }
  @media (min-width: 992px) { max-width: 960px; }
  @media (min-width: 1280px) { max-width: 1200px; }
`

export const TopNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`

export const AppName = styled.h1`
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--white);
`

export const TouchableIcon = styled.div`
  font-size: 1.25rem;
  position: relative;
  color: var(--white);

  @media(max-width: 768px) {
    font-size: 1.75rem;
  }

  svg {
    &:hover {
      cursor: pointer;
      color: var(--primary);
    } 
  }
`

export const ItemsInCart = styled.span`
  position: absolute;
  top: -5px;
  left: -5px;
  background-color: red;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0.6rem;
  font-weight: bold;
  width: 1rem;
  height: 1rem;
  border-radius: 1rem;
`

export const SearchBox = styled.div`
  display: ${({ visible }) => visible ? 'initial' : 'none'};
`