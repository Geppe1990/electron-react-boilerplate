import React from 'react';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from 'renderer/state';
import { useDispatch, useSelector } from 'react-redux';
import { movePhoto } from 'renderer/api/api';
import SliderWrapper from '../SliderWrapper/SliderWrapper';

type FolderButtonProps = {
  name: string;
  folder: string;
};

const FolderButton: React.FC<FolderButtonProps> = ({ name, folder }) => {
  const activePhoto = useSelector((state: State) => state.activePhoto);

  return (
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
};

const Main = () => {
  const photos = useSelector((state: State) => state.photos);
  const dispatch = useDispatch();
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

  const { loadPhotos } = bindActionCreators(actionCreators, dispatch);

  const loadImages = () => {
    window.electron.ipcRenderer.once('get-files', (arg) => {
      loadPhotos(arg as string[]);
    });
  };

  return (
    <div className="columns">
      <div className="column is-four-fifths">
        <SliderWrapper />
        <div className="flex justify-center">
          <button
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
  );
};

export default Main;
