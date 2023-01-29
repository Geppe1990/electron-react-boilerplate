import Slider from '../Slider/Slider';
import { State } from 'renderer/state';
import { useSelector } from 'react-redux';

const SliderWrapper = () => {
  const photos = useSelector((state: State) => state.photos);

  return <Slider images={photos} />
};

export default SliderWrapper;
