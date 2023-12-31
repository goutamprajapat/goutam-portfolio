import React from "react";
import Home from "./pages/Home";
import "./App.css";
import NavbarHome from "./Components/Navbar";

const App = () => {
  return (
    <div className="bg g-0">
      <NavbarHome />
      <Home />
    </div>
  );
};

export default App;
