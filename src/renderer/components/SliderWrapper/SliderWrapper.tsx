import { SetStateAction, useState, useEffect } from 'react';
import Slider from '../Slider/Slider';

const SliderWrapper = () => {
  const [images, setImages] = useState<string[]>([]);
  const loadImages = () => {
    window.electron.ipcRenderer.once('get-files', (arg) => {
      const result = arg as SetStateAction<string[]>;
      setImages(result);
    });
    window.electron.ipcRenderer.sendMessage('get-files', [
      'BACKEND: dato ricevuto dal front-end',
    ]);
  };

  useEffect(() => {
    loadImages();
  }, []);

  return (
    <>
      <Slider images={images} />
    </>
  );
};

export default SliderWrapper;
