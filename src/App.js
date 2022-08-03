import React from "react";
import Header from "./common/components/Header";
import Menubar from "./common/components/Menubar";
import Template from "./common/components/Template";
import Toolbar from "./common/components/Toolbar";
import GlobalStyle from "./common/styles/Globalstyle";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <GlobalStyle />
      <Template>
        <Menubar />
        <Header />
        <Toolbar />
        <Home />
      </Template>
    </>
  );
}

export default App;
