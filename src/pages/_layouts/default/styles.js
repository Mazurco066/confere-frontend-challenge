// Dependencies
import styled from 'styled-components'

// Styles
export const Wrapper = styled.main`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 'header' 'content' 'footer';
  height: 100%;
`

export const Content = styled.div`
  grid-area: content;
`