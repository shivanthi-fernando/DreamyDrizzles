// eslint-disable-next-line no-unused-vars
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import BestSellers from "./components/BestSellers/BestSellers";

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <BestSellers />
    </div>
  );
};

export default App;
