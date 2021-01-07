import { createGlobalStyle } from 'styled-components';
import background from 'assets/img/background.png';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;700;900&display=swap');
*, *::before, *::after{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    overflow: hidden;
}
html{
    height: -webkit-fill-available;
}
body{
     
     
    background-image: url(${background});
    font-family: 'Montserrat', sans-serif;
    
}
`;
export default GlobalStyle;
