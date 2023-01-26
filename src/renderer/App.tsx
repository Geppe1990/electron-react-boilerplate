import React, { SetStateAction, useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Slider from './components/Slider/Slider';

const Index = () => {
  const [images, setImages] = useState<string[]>([]);
  // console.log(images);
  const loadImages = () => {
    window.electron.ipcRenderer.once('get-files', (arg) => {
      const result = arg as SetStateAction<string[]>;
      setImages(result);
      // eslint-disable-next-line no-console
    });
    window.electron.ipcRenderer.sendMessage('get-files', [
      'BACKEND: dato ricevuto dal front-end',
    ]);
  };

  return (
    <div className="container">
      {/* <Slider /> */}
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">Prova prova prova</div>
      <div className="flex justify-center">
        <button type="button">👰‍♀️ Giulia</button>
        <button type="button">👯 Amici</button>
        <button type="button">👨‍👩‍👦‍👦 Famiglia</button>
        <button type="button" onClick={() => loadImages()}>
          🗂️ Seleziona cartella
        </button>
        <>
          {images.map((image) => (
            <img
              key={image}
              src={`${image}`}
              alt={image}
              style={{ width: '100px', height: 'auto' }}
            />
          ))}
        </>
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
