import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing : border-box;
    font-size: 16px;
    line-height: 1.5;
    color: #333;
    background: #a1c3ff;
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
    font-family: 'Poppins', sans-serif;
    @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

}
`;