import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Header from "./components/Header";

const GlobalStyle = createGlobalStyle`
${reset};
html {
  font-size: 10px;
}
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <div style={{ height: "200vh" }}></div>
      <Header />
    </React.Fragment>
  );
}

export default App;
