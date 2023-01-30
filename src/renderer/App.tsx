import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from 'renderer/state';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import SliderWrapper from './components/SliderWrapper/SliderWrapper';

type FolderButtonProps = {
  name: string;
  folder: string;
};

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

  const FolderButton: React.FC<FolderButtonProps> = ({ name, folder }) => (
    <button
      disabled={!activePhoto}
      type="button"
      onClick={() => movePhoto(activePhoto, folder)}
    >
      {name}
    </button>
  );

  const basePath = 'file:///Users/geppe/Desktop';

  const buttons = [
    { name: '👰‍♀️ Giulia', folder: `${basePath}/nuovefoto/giulia` },
    { name: '👯 Amici', folder: `${basePath}/nuovefoto/amici` },
    { name: '👨‍👩‍👦‍👦 Famiglia', folder: `${basePath}/nuovefoto/famiglia` },
    { name: '👨‍👩‍👦‍👦 Altro', folder: `${basePath}/nuovefoto/altro` },
    { name: '🧑‍💻 Io', folder: `${basePath}/nuovefoto/io` },
    { name: '🐾 Animali', folder: `${basePath}/nuovefoto/animali` },
    { name: '🏖️ Vacanze', folder: `${basePath}/nuovefoto/vacanze` },
    { name: '🗂️ ToFolder', folder: `${basePath}/nuovefoto/fotodaspostare` },
  ];

  return (
    <div className="container">
      <h1>Photomanager</h1>
      <SliderWrapper />
      <div className="flex justify-center">
        <button onClick={() => loadImages()} type="button">
          Carica le foto
        </button>
        {buttons.map(({ name, folder }) => (
          <FolderButton key={name} name={name} folder={folder} />
        ))}
      </div>
      <aside className="sidebar">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quas
        atque dignissimos animi expedita alias quidem vel sapiente accusantium
        beatae est eum, ipsum eius numquam officiis fuga, tempore quae
        architecto.
      </aside>
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
