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

        font-family: 'Noto Sans KR', sans-serif;
    }
`;

export default GlobalStyle;