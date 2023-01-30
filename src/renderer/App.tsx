import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from 'renderer/state';
import { useDispatch, useSelector } from 'react-redux';
import 'bulma/css/bulma.min.css';
import './App.css';
import SliderWrapper from './components/SliderWrapper/SliderWrapper';

type FolderButtonProps = {
  name: string;
  folder: string;
};

const Index = () => {
  const activePhoto = useSelector((state: State) => state.activePhoto);
  const photos = useSelector((state: State) => state.photos);
  const dispatch = useDispatch();
  const { loadPhotos } = bindActionCreators(actionCreators, dispatch);
  const basePath = 'file:///Users/geppe/Desktop/nuovefoto';
  const buttons = [
    { name: '👰‍♀️ Giulia', folder: `${basePath}/giulia` },
    { name: '👯 Amici', folder: `${basePath}/amici` },
    { name: '👨‍👩‍👦‍👦 Famiglia', folder: `${basePath}/famiglia` },
    { name: '👨‍👩‍👦‍👦 Altro', folder: `${basePath}/altro` },
    { name: '🧑‍💻 Io', folder: `${basePath}/io` },
    { name: '🐾 Animali', folder: `${basePath}/animali` },
    { name: '🏖️ Vacanze', folder: `${basePath}/vacanze` },
    { name: '🗂️ ToFolder', folder: `${basePath}/fotodaspostare` },
  ];

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

  const FolderButton: React.FC<FolderButtonProps> = ({ name, folder }) => (
    <div className="mb-2">
      <button
        className="is-block"
        disabled={!activePhoto}
        type="button"
        onClick={() => movePhoto(activePhoto, folder)}
      >
        {name}
      </button>
    </div>
  );

  return (
    <div className="container-fluid">
      <h1>Photomanager</h1>
      <div className="columns">
        <div className="column is-four-fifths">
          <SliderWrapper />
          <div className="flex justify-center">
            <button
              tabIndex={0}
              disabled={photos && photos.length > 0}
              onClick={() => loadImages()}
              type="button"
            >
              Carica le foto
            </button>
          </div>
        </div>
        <aside className="column">
          {buttons.map(({ name, folder }) => (
            <FolderButton key={name} name={name} folder={folder} />
          ))}
        </aside>
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
