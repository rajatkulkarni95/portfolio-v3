import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    ${({ theme }) => `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html, body {
        height: 100vh;
    }


    html {
        scroll-behaviour: smooth;
    }

    body {
        width:100%;
        background: ${theme.colors.background};
        color: ${theme.colors.text};
        font-family: ${theme.fonts.text};
        line-height: ${theme.lineHeights.body};
        display: block;
        transition: background 0.3s ease;
    }

    `}
`;
