// eslint-disable-next-line no-unused-vars
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import BestSellers from "./components/BestSellers/BestSellers";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <NavBar />
      <Hero />
      <BestSellers />
    </div>
  );
};

export default App;
