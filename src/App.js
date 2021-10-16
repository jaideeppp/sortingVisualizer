import React from "react";
import { NavBar } from "./components/Navbar";
import { Controller } from "./components/Controller";
import { AlgoDisplay } from "./components/AlgoDisplay";
import './App.css'


export default function App() {
  return (
    <div className="app-container">
      <NavBar />
      <Controller />
      <AlgoDisplay />
    </div>
  );
}
