import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Auth from './components/Auth';
import Gallery from './components/Gallery';
import "./App.css"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/Gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
