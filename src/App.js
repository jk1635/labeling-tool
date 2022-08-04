import React from "react";
import GlobalStyle from "./common/styles/Globalstyle";

// recoil
import { RecoilRoot } from "recoil";

// pages
import Home from "./pages/Home";

// components
import { Header, Menubar, Template, Toolbar } from "./common/components";

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Template>
        <Menubar />
        <Header />
        <Toolbar />
        <Home />
      </Template>
    </RecoilRoot>
  );
}

export default App;
