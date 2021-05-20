// Dependencies
import styled from 'styled-components'

// Styles
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  padding-top: 1rem;

  @media(max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media(max-width: 991px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media(max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Item = styled.div`
  border-radius: 8px;
  background-color: var(--darker);
  border-width: 1px;
  border-style: solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border: none;

  &:hover {
    cursor: pointer;
    background-color: var(--primary);
    color: var(--darker);

    svg {
      color: var(--darker);
    }
  }

  overflow: hidden;
  transition: all 0.3s;
`

export const Image = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  // Loading placeholder
  img {
    height: 100%;
    width: 100%;
    object-position: top;
    object-fit: contain;
    background-color: #ffffff;
  }
`

export const OnSale = styled.span`
  background-color: var(--primary);
  color: var(--darker);
  padding: 4px 8px;
  font-size: 1rem,;
  text-transform: uppercase;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  border-radius: 8px;
`

export const Sizes = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--darker);
  color: var(--white);
  min-width: 2rem;
  padding: 8px 4px;
  border-radius: 8px;
  position: absolute;
  left: 0.5rem;
  top: 0.5rem;
`
export const Size = styled.span`
  text-decoration: ${({ out }) => out ? 'line-through' : 'none'};
  color: ${({ out }) => out ? 'red' : 'var(--white)'};
`

export const Info = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 10px;
  width: 100%;
`

export const Name = styled.p`
  font-weight: bold;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-transform: capitalize;
  transition: all 0.3s;
`

export const Price = styled.p`
  font-weight: normal;
  transition: all 0.3s;

  span {
    text-decoration: line-through;
  }
`

export const NavIcon = styled.div`
  background-color: transparent;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  right: 10px;
  bottom: 10px;

  svg {
    color: white;
    font-size: 1rem;
    transition: all 0.3s;
  }
`