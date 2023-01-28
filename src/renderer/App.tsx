import React, { useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SliderWrapper from './components/SliderWrapper/SliderWrapper';
import Test from './components/test';

const Index = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activePhoto, setActivePhoto] = useState('foto1');

  const movePhoto = (foto: string, folder: string) => {
    // eslint-disable-next-line no-console
    console.log(`Muovo la foto ${foto} nella cartella ${folder}`);
  };

  return (
    <div className="container">
      {/* <SliderWrapper /> */}
      <Test />
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">Prova prova prova</div>
      <div className="flex justify-center">
        <button
          type="button"
          onClick={() => movePhoto(activePhoto, 'nomecartella1')}
        >
          👰‍♀️ Giulia
        </button>
        <button
          type="button"
          onClick={() => movePhoto(activePhoto, 'nomecartella2')}
        >
          👯 Amici
        </button>
        <button
          type="button"
          onClick={() => movePhoto(activePhoto, 'nomecartella3')}
        >
          👨‍👩‍👦‍👦 Famiglia
        </button>
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
