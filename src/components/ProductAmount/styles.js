// Dependencies
import styled from 'styled-components'

// Styles
export const Wrapper = styled.div`
  margin-bottom: ${props => `${props.mb}rem`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Label = styled.label`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 8px;
  color: var(--white);
`

export const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  height: 35px;
  width: 96px;
  margin: 0 auto;
`
export const Input = styled.input`
  background-color: var(--primary);
  color: white;
  border: none;
  outline: none;
  text-align: center;
  font-size: 1.125rem;
  flex-grow: 1;
  width: 32px;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`

export const AddonLeft = styled.button`
  width: 32px;
  outline: none;
  border: none;
  background-color: transparent;

  &:hover {
    cursor: pointer;

    svg {
      color: var(--primary);
    }
  }

  svg {
    color: var(--white);
  }
`

export const AddonRight = styled.button`
  width: 32px;
  outline: none;
  border: none;
  background-color: transparent;

  &:hover {
    cursor: pointer;

    svg {
      color: var(--primary);
    }
  }

  svg {
    color: var(--white);
  }
`

export const ValidationError = styled.span`
  color: red;
  margin-top: 4px;
`