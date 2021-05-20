// Dependencies
import styled from 'styled-components'

// Styles
export const Wrapper = styled.div`
  margin-bottom: ${props => props.mb ? `${props.mb}rem` : '1rem'};
`

export const Label = styled.label`
  display: block;
  font-size: 1rem;
  text-align: center;
  margin-bottom: 8px;
  color: var(--white);
`

export const InputGroup = styled.div`
  display: flex;
  justify-content: ${({ fit }) => fit ? 'space-between' : 'center'};
  position: relative;
  height: 35px;
`

export const Input = styled.select`
  width: ${({ fit }) => fit ? '100%' : 'initial'};
  height: 100%;
  border-color: var(--primary);
  color: var(--darker);
  border-style: solid;
  border-radius: 8px;
  font-size: 1rem;
  border-width: .7px;
  outline: none;

  &:focus {
    border-color: var(--highlight);
  }

  option {
    color: var(--white);
    background: var(--background);
    display: flex;
    white-space: pre;
    padding: 0px 2px 1px;
  }

  transition: all 0.3s;
`

export const AddonLeft = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  font-size: 1rem;
  color: var(--darker);
  transition: all 0.3s;
  cursor: pointer;
`

export const ValidationError = styled.span`
  color: red;
  margin-top: 4px;
`