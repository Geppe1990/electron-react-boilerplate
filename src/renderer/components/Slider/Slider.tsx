import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from 'renderer/state';
import { Dom7Array } from 'dom7';
import SlideNextButton from './SlideNextButton';
import SlidePrevButton from './SlidePrevButton';
import 'swiper/css';

type SlideContentProps = {
  children: JSX.Element;
};

type SliderProps = {
  images: string[];
};

const SlideContent: React.FC<SlideContentProps> = ({ children }) => {
  return <>{children}</>;
};

const Slider: React.FC<SliderProps> = ({ images }) => {
  const dispatch = useDispatch();
  const { setActivePhoto, removePhoto } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const activePhoto = useSelector((state: State) => state.activePhoto);

  const manageSlide = (swiper: { realIndex: number; slides: Dom7Array }) => {
    const index = swiper.realIndex;
    const activeSlide = swiper.slides[index];
    const imagePath = activeSlide?.querySelector('img')?.src;

    if (!imagePath) return;
    setActivePhoto(imagePath);
  };

  window.electron.ipcRenderer.once('move-photo', (arg) => {
    removePhoto(arg as string);
    setActivePhoto('');
  });

  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onUpdate={(swiper) => manageSlide(swiper)}
        onSlideChange={(swiper) => manageSlide(swiper)}
      >
        {images.map((image, index) => (
          <SwiperSlide tabIndex={index} key={image}>
            <SlideContent>
              <>
                <img
                  key={image}
                  src={`${image}`}
                  alt={image}
                  style={{ width: '300px', height: 'auto' }}
                />
                <br />
                <b>{activePhoto}</b>
              </>
            </SlideContent>
          </SwiperSlide>
        ))}
        <div className="commands">
          <SlidePrevButton />
          <SlideNextButton />
        </div>
      </Swiper>
    </>
  );
};

export default Slider;
