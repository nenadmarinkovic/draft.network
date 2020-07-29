import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'Steradian';
  src: url('../fonts/SteradianBold.woff2') format('woff2'),
      url('../fonts/SteradianBold.woff') format('woff');
  font-weight: bold;
  font-style: normal;
  font-display: block;
}

@font-face {
  font-family: 'Steradian';
  src: url('../fonts/SteradianRegular.woff2') format('woff2'),
      url('../fonts/SteradianRegular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

@font-face {
  font-family: 'Steradian';
  src: url('../fonts/SteradianBlack.woff2') format('woff2'),
      url('../fonts/SteradianBlack.woff') format('woff');
  font-weight: 800;
  font-style: normal;
  font-display: block;
}

@font-face {
  font-family: 'Steradian';
  src: url('../fonts/SteradianLight.woff2') format('woff2'),
      url('../fonts/SteradianLight.woff') format('woff');
  font-weight: 300;
  font-style: normal;
  font-display: block;
}

@font-face {
  font-family: 'Steradian';
  src: url('../fonts/SteradianMedium.woff2') format('woff2'),
      url('../fonts/SteradianMedium.woff') format('woff');
  font-weight: 500;
  font-style: normal;
  font-display: block;
}

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html {
    margin: 0;
    padding: 0;
    font-family: 'Steradian', -apple-system,system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
  }

  body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    padding: 0;
    -webkit-backface-visibility: initial !important;
            -webkit-transform-origin: 50% 50%;
  }

  .small-header-avatar {
    width: 30px;

  }

  `;
