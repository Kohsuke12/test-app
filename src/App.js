// 変更箇所

import React from "react";
import { Header } from "./components/Header";
import { Home } from "./components/Home/index";
import { Footer } from "./components/footer/index";

export const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
};
