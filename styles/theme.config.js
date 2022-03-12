import { createGlobalStyle } from "styled-components";

export const siteTheme = {
  darkPink: '#993f3f',
  pink: '#e6a3a3',
  lightPink: '#ffcfcf',
  darkGreen: '#4e9963',
  green: '#a3e6b6',
}
export const GlobalStyles = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-size: 16px;
  font-family: 'Fjalla One', sans-serif, 'Lobster', cursive, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

h1 {
  font-size: 24px
}

h3 {
  font-size: 16px
}
`
