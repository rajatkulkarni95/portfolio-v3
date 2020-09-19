import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Navigation } from "./components/Navigation";
import { Routes } from "./routes";
import { darkTheme, lightTheme } from "./theme";
import { GlobalStyle } from "./theme/globalStyle";

function App() {
  const [theme, setTheme] = useState("dark");

  const themeSwitcher = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Navigation theme={theme} handleClick={themeSwitcher} />
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
