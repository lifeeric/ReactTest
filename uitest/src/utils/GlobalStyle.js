import { createGlobalStyle } from "styled-components";
import Lato from "../assets/fonts/Lato-Regular.ttf";

const FontStyles = createGlobalStyle`
@font-face {
  font-family: 'Lato';
  src: url(${Lato}) format('truetype');
}

* {
  font-family: 'Lato';
}
`;

export default FontStyles;
