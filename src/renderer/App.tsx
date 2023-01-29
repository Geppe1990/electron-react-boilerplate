import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from 'renderer/state';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import SliderWrapper from './components/SliderWrapper/SliderWrapper';

const Index = () => {
  const activePhoto = useSelector((state: State) => state.activePhoto);
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

  const movePhoto = (foto: string | undefined, folder: string) => {
    window.electron.ipcRenderer.sendMessage('move-photo', [foto, folder]);
  };

  return (
    <div className="container">
      <SliderWrapper />
      <h1>electron-react-boilerplate</h1>
      <div className="flex justify-center">
        <button onClick={() => loadImages()} type="button">
          Carica le foto
        </button>
        <button
          disabled={!activePhoto}
          type="button"
          onClick={() =>
            movePhoto(
              activePhoto,
              'file:///Users/geppe/Desktop/provafoto/fotonuove'
            )
          }
        >
          👰‍♀️ Giulia
        </button>
        <button
          disabled={!activePhoto}
          type="button"
          onClick={() =>
            movePhoto(
              activePhoto,
              'file:///Users/geppe/Desktop/provafoto/fotonuove'
            )
          }
        >
          👯 Amici
        </button>
        <button
          disabled={!activePhoto}
          type="button"
          onClick={() =>
            movePhoto(
              activePhoto,
              'file:///Users/geppe/Desktop/provafoto/fotonuove'
            )
          }
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
