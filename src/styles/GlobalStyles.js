import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Source Serif Pro', sans-serif;
    background-color: ${({ theme }) => theme.colores.blancoHumo};
    color: ${({ theme }) => theme.colores.azulPetroleo};
  }

  button {
    cursor: pointer;
  }
  input,select {
    font-size: 1rem;
  }
`;

export default GlobalStyles;
