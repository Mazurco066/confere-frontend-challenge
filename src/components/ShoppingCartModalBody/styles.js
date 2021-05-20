// Dependencies
import styled from 'styled-components'

// Styles
export const Wrapper = styled.div`
  
`

export const TouchableIcon = styled.div`
  font-size: 1.25rem;

  @media(max-width: 768px) {
    font-size: 1.75rem;
  }

  svg {
    &:hover {
      cursor: pointer;
      color: var(--highlight);
    } 
  }
`

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
  border-bottom: 1px solid var(--white);
  border-top: 1px solid var(--white);
`

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`

export const Logo = styled.div`
  flex: 0 0 auto;
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 40px;
  overflow: hidden;
  margin-right: 1rem;
`

export const Info = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

export const Description = styled.p`
  margin-right: 1rem;
  width: 100%;

  strong {
    color: var(--darker);
  }
`

export const Price = styled.p`
  flex: 0 0 auto;
  color: var(--darker);
`

export const Actions = styled.div`
  flex: 0 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const Action = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 1px solid red;
  height: 40px;
  width: 40px;
  border-radius: 8px;
  outline: none;
  
  svg {
    color: red;
  }

  &:hover {
    cursor: pointer;
    background-color: red;

    svg {
      color: white;
    }
  }
`

export const Subtotal = styled.p`
  margin: 1rem 0;
  font-size: 1.17rem;
  color: var(--darker);
`

export const NoData = styled.p`
  text-align: center;
  width: 100%;
`