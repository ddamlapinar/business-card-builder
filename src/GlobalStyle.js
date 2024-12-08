import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`

html  {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

.App {
  font-family: Roboto, sans-serif;
  box-sizing: border-box;
  font-size: 16px;
  width: 100%;
  height: 100%;
  padding: 64px;
  
}

button {
  border: none;
}

h1 {
  font-family: Roboto,sans-serif;
}

.innerContainer {
  gap: 32px;
  @media (max-width: 768px) {
    flex-direction: column;
  }

}

.flex {
  display: flex;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex-justify-between {
  display: flex;
  justify-content: space-between;
}

.flex-space-evenly {
  display: flex;
  justify-content: space-evenly;
}

.text-center {
  text-align: center;
}

.flex-1 {
  flex: 1; 
}

`;

export default GlobalStyle;
