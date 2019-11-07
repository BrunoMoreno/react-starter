import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Exo:100,300,400,500&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, 'Exo', sans-serif;
  }

  a {
    text-decoration: none;
    margin: 0px 10px 0px 0px;
    font-size: 14px;
  }
`

export default GlobalStyle
