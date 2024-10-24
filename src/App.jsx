import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights.jsx";
import Model from "./components/Model.jsx";

const App = () => {
  return (
    <main className='bg-black '>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
    </main>
  );
};

export default App;
