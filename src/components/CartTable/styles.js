// Dependencies
import styled from 'styled-components'

// Styles
export const Wrapper = styled.div`
  margin-top: 1rem;
`

export const Title = styled.h3`
  margin-bottom: 8px;
  color: var(--white);

  strong {
    color: var(--primary);
  }
`

export const Item = styled.div`
  background-color: var(--darker);
  border-radius: 8px;
  padding: 8px 15px;
  margin-bottom: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`

export const ProductImage = styled.div`
  flex: 0 0 auto;
  position: relative;
  width: 70px;
  height: 70px;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 1rem;

  @media (max-width: 576px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
   
   // Loading placeholder
  img {
    width: 100%;
    height: 100%;
    background-color: #ffffff;
  }
`

export const Info = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-right: 3rem;

  @media (max-width: 576px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`

export const Description = styled.p`
  margin-right: 1rem;
  width: 100%;

  @media (max-width: 576px) {
    margin-right: 0;
    text-align: center;
  }

  strong {
    color: var(--primary);
    font-weight: lighter;
  }
`

export const Amount = styled.div`
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;

  @media (max-width: 576px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`

export const Pricing = styled.div`
  flex: 0 0 auto;
  margin-right: 1rem;

  @media (max-width: 576px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`

export const Price = styled.p`
  font-size: 1.17rem;
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