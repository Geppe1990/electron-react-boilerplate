import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Slider from './components/Slider/Slider';

const Index = () => {
  return (
    <div className="container">
      <Slider />
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">Prova prova prova</div>
      <div className="flex justify-center">
        <button type="button">Giulia</button>
        <button type="button">Amici</button>
        <button type="button">Famiglia</button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}
