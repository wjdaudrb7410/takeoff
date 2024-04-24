import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "@noonnu/spoqa-han-sans";
export const NO_IMG =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIol-IqUGeg3Q_Jr-iz9hjXbkOONSZqkYBLg&s";
export const Color = {
  Title: "#76E4F7",
};
export const GlobalStyle = createGlobalStyle`
    ${reset}

    *{box-sizing:border-box;
        font-family: Spoqa Han Sans !important;
    }

    body{
      letter-spacing: -1px;
        background-color: ${({ theme }) => theme.bgColor};
        color: ${({ theme }) => theme.textColor};
        max-width: 450px;
        margin: auto;
    }
    a{
          text-decoration: none;
          color: ${({ theme }) => theme.textColor};
      }
`;
