import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    head, script{
        display:none;
    }
    body{
        min-height: 100vh;
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyle;