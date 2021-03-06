// Dependencies
import Modal from 'styled-react-modal'
import styled, { createGlobalStyle } from 'styled-components'

// Styles
const GlobalStyles = createGlobalStyle`
  // Theme colors
  :root {
    --primary: #4ecca3;
    --darker: #232931;
    --light: #393e46;

    --white: #EEEEEE;
    
    --highlight: #279285;

    --background: #393e46;
    
    --container: 100rem;

    --small: 1.5rem;
    --medium: 3rem;
    --large: 5rem;
  }

  // All tags
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  fieldset {
    border: 0;
    min-width: 0;
  }

  // Page parent container
  html, body, #root {
    height: 100%;
    background-color: var(--background);
    color: var(--white);
    scroll-behavior: smooth;

    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      background-color: var(--light);
      overflow: hidden;
    }

    ::-webkit-scrollbar {
      width: 8px;
      background-color: var(--light);
      overflow: hidden;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--primary);
      border: 2px solid var(--primary);
    }
  }

  // Reset default html tags css
  body {
    overflow-y: auto;
  }

  img {
    width: 100%;
    object-fit: cover;
  }

  a {
    text-decoration: none;
  }

  // Input styles 
  input, input:after, input:before, textarea {
    -webkit-user-select: initial;
    -moz-user-select: initial;
    -ms-user-select: initial;
    user-select: initial;
    outline: none;
  }

  .sc-custom-input {
    width: 100%;
    height: 100%;
    border-color: var(----light);
    color: var(--darker);
    border-style: solid;
    border-radius: 8px;
    font-size: 1rem;
    border-width: .7px;
    &:focus {
      border-color: var(--primary);
    }
    transition: all 0.3s;
  }  
`

// Modal
export const CustomModal = Modal.styled`
  display: block;
  position: relative;
  width: ${({ fit }) => fit ? 'fit-content' : '100%'};
  height: auto;
  border-radius: 8px;
  background-color: var(--background);
  max-width: 700px;
  padding: 15px;
  overflow-y: auto;
  max-height: 90%;
  @media(min-width: 768px) {
    max-width: 450px;
  }
  @media only screen and (max-width: 767px) {
    margin: 0;
    max-width: 100%;
    max-height: 100%;
    height: 100%;
    width: 100%;
    border-radius: 0;
    overflow-x: hidden;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: var(--light);
    overflow: hidden;
  }

  ::-webkit-scrollbar {
    width: 8px;
    background-color: var(--light);
    overflow: hidden;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--primary);
    border: 2px solid var(--primary);
  }
`

// Calc column width func
const getColumnWidth = (span) => {
  if (!span) return
  const width = span / 12 * 100
  return `width: ${width}%`
}

export const Content = styled.main`
  padding-bottom: ${({ togglePwa }) => togglePwa ? '50px' : '0'};
`

// Container Styles
export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  padding: 0 ${({ ph }) => (ph !== undefined && ph !== null) ? `${ph}px` : '15px'};
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 576px) { max-width: 540px; }
  @media (min-width: 768px) { max-width: 720px; }
  @media (min-width: 992px) { max-width: 960px; }
  @media (min-width: 1280px) { max-width: 1200px; }
`;

// Row Styles
export const Row = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: ${({ marginTop }) => marginTop ? marginTop : '0'};
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`

// Column Styles
export const Column = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  float: left;
  padding: 0 ${({ ph }) => (ph !== undefined && ph !== null) ? `${ph}px` : '10px'};
  ${({ xs }) => (xs ? getColumnWidth(xs) : 'width: 100%')};
  @media only screen and (min-width: 540px) {
    ${({ sm }) => (sm ? getColumnWidth(sm) : 'width: 100%')};
  }
  @media only screen and (min-width: 768px) {
    ${({ md }) => (md ? getColumnWidth(md) : 'width: 100%')};
  }
  @media only screen and (min-width: 991px) {
    ${({ lg }) => (lg ? getColumnWidth(lg) : 'width: 100%')};
  }
`

// Exporting global styles
export default GlobalStyles