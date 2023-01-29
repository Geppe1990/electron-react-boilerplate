import { SetStateAction, useState, useEffect } from 'react';
import Slider from '../Slider/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from 'renderer/state';

const SliderWrapper = () => {
  const dispatch = useDispatch();
  const { loadPhotos } =
    bindActionCreators(actionCreators, dispatch);
  const photos = useSelector((state: State) => state.photos);


  const loadImages = () => {
    window.electron.ipcRenderer.once('get-files', (arg) => {
      loadPhotos(arg as string[]);
    });
    window.electron.ipcRenderer.sendMessage('get-files', [
      'BACKEND: dato ricevuto dal front-end',
    ]);
  };

  return (
    <>
      <button onClick={() => loadImages()} type="button">Carica le foto</button>
      <Slider images={photos} />
    </>
  );
};

export default SliderWrapper;
