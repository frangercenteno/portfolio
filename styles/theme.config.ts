import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;500;700;900&display=swap');
    *, body, html {
        font-family: 'Montserrat', sans-serif;
    }

    .header-main {
        height: 100%;
    }

    .experience-container {
        max-width: 500px;
    }
`;