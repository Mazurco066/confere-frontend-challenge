// Dependencies
import styled from 'styled-components'

// Styles
export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Image = styled.div`
  width: 300px;
  height: 200px;
  position: relative;
  overflow: hidden;
  display: flex;
  border-radius: 8px;
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

  margin-bottom: 1rem;
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

export const Name = styled.p`
  font-size: 1.275rem;
  font-weight: normal;
  text-align: center;
  text-transform: capitalize;
`

export const Price = styled.h3`
  font-size: 1.275rem;
  font-weight: bold;
  text-align: center;

  span {
    text-decoration: line-through;
  }
`


export const Actions = styled.div`
  width: 100%;
`