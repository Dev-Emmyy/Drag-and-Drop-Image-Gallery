import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Auth from './components/Auth';
import Gallery from './components/Gallery';
import "../src/App.css"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
}

export default App;
