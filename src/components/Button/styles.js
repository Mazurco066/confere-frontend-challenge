// Dependencies
import styled from 'styled-components'

// Styles
export const Button = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  font-size: 1rem;
  text-transform: uppercase;
  background-color: transparent;
  outline: none;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => `var(--${props.status})`};
  color: ${props => `var(--${props.status})`};
  margin-bottom: ${({ mb }) => mb ? `${mb}rem` : 0};
  &:hover {
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    background-color: ${props => `var(--${props.status})`};
    color: white;
  }
`