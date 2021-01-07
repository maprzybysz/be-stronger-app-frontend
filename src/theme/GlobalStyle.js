import { createGlobalStyle } from 'styled-components';
import background from 'assets/img/background.png';

const GlobalStyle = createGlobalStyle`
*, *::before, *::after{
    box-sizing: border-box;
}
body{
    background-image: url(${background});
}
`;
export default GlobalStyle;
