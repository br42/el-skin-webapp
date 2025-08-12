import 'normalize.css';
import 'fonts.css';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import 'fonts.css';

html, body {
  font-family: 'Poppins', 'Century Gothic', 'Futura', 'Segoe UI', 'Geneva', sans-serif;
  min-height: 100vh;
}

.pagina {
  padding: 16px 16px;
}

.center {
  text-align: center;
}

.mcenter {
  text-align: center;
  justify-items: center;
  align-items: center;
}

img {
  max-width: 100%;
}

.float-left {
  float: left;
}

.float-right {
  float: right;
}

button {
  background-color: #93426E;
  border: none;
  color: #ffffff;
  font-weight: 400;
  border-radius: 8px;
  padding: 8px 8px;
  cursor: pointer;
}

button * {
  margin: 0px 8px 0px 8px;
}

textarea, .input-textarea {
  display: flex;
  align-content: center;
  justify-content: space-between;
  background-color: #F5F6F5;
  /*border: solid 1px #333333;*/
  border: 1px solid #DEDEDE;
  max-width: 80vw;
  height: 4rex;
  border-radius: 8px;
  padding: 8px;
  color: inherit;
  position: relative;
  top: 0px;
  margin-right: 20px;
}

textarea::placeholder, .input-textarea::placeholder {
  color: #9C9C9C;
}

:where(input[type="text"]) {
  display: flex;
  align-content: center;
  justify-content: space-between;
  background-color: #F5F6F5;
  /*border: solid 1px #333333;*/
  border: 1px solid #DEDEDE;
  max-width: 80vw;
  height: 4rex;
  border-radius: 8px;
  padding: 8px;
  color: inherit;
  position: relative;
  top: 0px;
  margin-right: 20px;
}

:where(input[type="text"])::placeholder {
  color: #9C9C9C;
}

.input[type="checkbox"] {
  display: flex;
  align-content: center;
  justify-content: space-between;
  background-color: #F5F6F5;
  /*border: solid 1px #333333;*/
  border: 1px solid #DEDEDE;
  height: 4rex;
  border-radius: 8px;
  padding: 8px;
  color: inherit;
  position: relative;
  top: 0px;
  margin-right: 20px;
}
`;

export const Pagina = styled('div')`
  padding: 16px 16px;
`;

export default GlobalStyle;
