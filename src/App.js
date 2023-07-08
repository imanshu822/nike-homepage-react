import React, { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Nevigation from "./components/Nevigation"; 
import HeroSection from "./components/Hero";

function App() {
  return (
    <div>
      <Nevigation />
      <HeroSection />
    </div>
  );
}

export default App;
