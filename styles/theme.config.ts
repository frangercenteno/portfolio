import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *, body, html {
        font-family: "Montserrat", sans-serif;
    }

    .header-main {
        height: 100%;
    }

    article ul {
        list-style: circle;
        margin: 16px 0 2.5rem 0;
        padding-inline-start: 40px;
    }
`;
