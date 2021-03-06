import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
    }

    html {
        font-size: 62.5%;
    }

    body {
        color: #e1e1e6;
        background: #121214;
    }

    button {
        cursor: pointer;
    }

    @media (max-width: 1080px) {
        html {
            font-size: 93.75%;  
        }
    }

    @media (max-width: 720px) {
        html {
            font-size: 87.5%;
        }
    }
`;