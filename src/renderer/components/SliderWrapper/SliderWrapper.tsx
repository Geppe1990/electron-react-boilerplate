import { bindActionCreators } from 'redux';
import { actionCreators, State } from 'renderer/state';
import { useDispatch, useSelector } from 'react-redux';
import Slider from '../Slider/Slider';

const SliderWrapper = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state: State) => state.photos);
  const { setActivePhoto, removePhoto } = bindActionCreators(
    actionCreators,
    dispatch
  );

  window.electron.ipcRenderer.once('move-photo', (arg) => {
    removePhoto(arg as string);
    setActivePhoto('');
  });

  return <Slider images={photos} />;
};

export default SliderWrapper;
