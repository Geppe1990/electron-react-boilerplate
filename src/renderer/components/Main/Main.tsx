import React from 'react';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from 'renderer/state';
import { useDispatch, useSelector } from 'react-redux';
import { movePhoto, loadImages } from 'renderer/api/api';
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
  const { loadPhotos } = bindActionCreators(actionCreators, dispatch);
  const folders = useSelector((state: State) => state.folders.data);

  return (
    <div className="columns">
      <div className="column is-four-fifths">
        <SliderWrapper />
        <div className="flex justify-center">
          <button
            disabled={photos && photos.length > 0}
            onClick={() => loadImages(loadPhotos)}
            type="button"
          >
            Carica le foto
          </button>
        </div>
      </div>
      <aside className="column">
        {folders.map(({ name, folder }) => (
          <FolderButton key={name} name={name} folder={folder} />
        ))}
      </aside>
    </div>
  );
};

export default Main;
