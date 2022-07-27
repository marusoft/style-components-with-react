import React from "react";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Globar";
import content from "../src/content";
import Card from "./components/Card";
import Footer from "./components/Footer";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#ffffff",
    footer: "#003333",
  },
  mobiles: {
   md: "768px"
  }
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyles />
        <Navbar />
        <Container>
        {content.map((item, index) => (
        <Card key={index} item={item} />
        ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default App;
