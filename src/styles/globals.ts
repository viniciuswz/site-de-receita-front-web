import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  body {
    background-color: ${props => props.theme.colors.background};

  }

  header {
    & ~ div{
      margin-top: 108px;

      @media screen and (max-width: 768px) {
        margin-top: 63px;
      }
    }
  }

  input{
    outline: none;
  }
  button{
    cursor: pointer;
    appearance: none;
  }
`;
