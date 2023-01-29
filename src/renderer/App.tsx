import React, { useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { actionCreators } from 'renderer/state';
import { useDispatch } from 'react-redux';
import './App.css';
import SliderWrapper from './components/SliderWrapper/SliderWrapper';

const Index = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activePhoto, setActivePhoto] = useState('foto1');
  const dispatch = useDispatch();
  const { loadPhotos } = bindActionCreators(actionCreators, dispatch);

  const loadImages = () => {
    window.electron.ipcRenderer.once('get-files', (arg) => {
      loadPhotos(arg as string[]);
    });
    window.electron.ipcRenderer.sendMessage('get-files', [
      'BACKEND: dato ricevuto dal front-end',
    ]);
  };

  const movePhoto = (foto: string, folder: string) => {
    // eslint-disable-next-line no-console
    console.log(`Muovo la foto ${foto} nella cartella ${folder}`);
  };

  return (
    <div className="container">
      <SliderWrapper />
      {/* <Test /> */}
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">Prova prova prova</div>
      <div className="flex justify-center">
        <button onClick={() => loadImages()} type="button">
          Carica le foto
        </button>
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
