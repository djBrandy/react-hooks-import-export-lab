import React from "react";
import user from "../data/user";
import NavBar from "./NavBar";
import Home from "./Home"; 
import About from "./About";


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
