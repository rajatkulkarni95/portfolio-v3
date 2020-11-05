import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Navigation } from "./components/Navigation";
import { Routes } from "./routes";
import { darkTheme, lightTheme } from "./theme";
import { GlobalStyle } from "./theme/globalStyle";
import {useLocalStorage} from './hooks/useLocalStorage';

function App() {
  const [storedTheme, setStoredTheme] = useLocalStorage();
  

  const themeSwitcher = () => {
    storedTheme === "light" ? setStoredTheme("dark") : setStoredTheme("light");
  };

  return (
    <ThemeProvider theme={storedTheme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Navigation theme={storedTheme} handleClick={themeSwitcher} />
      <Container>
        <Routes />
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
`;

export default App;
