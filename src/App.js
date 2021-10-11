import React, { useState } from 'react';
import './App.css';
import AlgoDisplay from './components/AlgoDisplay';
import Controller from './components/Controller';
import Navbar from './components/Navbar';
import { getRandowArray } from './helper';

function App() {
  const [array, setArray] = useState(getRandowArray());
  const [algorithm, setAlgorithm] = useState(0);
  return (
    <div className="app-container">
      <Navbar algorithm={algorithm} setAlgorithm={setAlgorithm} />
      <Controller array={array} setArray={setArray} />
      <AlgoDisplay array={array} algorithm={algorithm} />
    </div>
  );
}

export default App;
