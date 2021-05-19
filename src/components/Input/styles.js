// Dependencies
import styled from 'styled-components'

// Styles
export const Wrapper = styled.div`
  margin-bottom: ${props => props.mb ? `${props.mb}rem` : '1rem'};
`

export const Label = styled.label`
  font-size: 0.9rem;
  margin-bottom: 4px;
  color: var(--white);
`

export const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  height: 35px;
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

export const AddonRight = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 1rem;
  color: var(--darker);
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    color: var(--primary);
  }
`

export const ValidationError = styled.span`
  color: red;
  margin-top: 4px;
`